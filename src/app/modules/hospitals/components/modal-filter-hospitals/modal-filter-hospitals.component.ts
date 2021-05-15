import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HospitalFormValueModel } from 'src/app/models/hospital-form-value.model';
import { Hospital } from 'src/app/models/hospitals.model';
import { ModalMessageComponent } from 'src/app/modules/shared/components/modal-message/modal-message.component';
import { HospitalsService } from 'src/app/services/hospitals.service';

@Component({
  selector: 'app-modal-filter-hospitals',
  templateUrl: './modal-filter-hospitals.component.html',
  styleUrls: ['./modal-filter-hospitals.component.css']
})
export class ModalFilterHospitalsComponent {

  hospitalForm: FormGroup;

  public isNoCameData = false;
  public isNoEnterData = false;

  constructor(
    public dialogRef: MatDialogRef<ModalFilterHospitalsComponent>,
    private hospitalsService: HospitalsService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public hospitalsData?: Hospital[],
  ) {
    this.hospitalForm = this.formBuilder.group({
      nameHospital: [''],
      typeOfProperty: [''],
      nameOfDepartments: ['']
    });
  }

  onClose(): void {
    this.dialogRef.close({ data: this.hospitalsData });
  }

  saveData(): void {
    const formData = this.hospitalForm.value as HospitalFormValueModel;
    if (formData.nameHospital.length > 0 || formData.nameOfDepartments.length > 0 || formData.typeOfProperty) {
      this.isNoEnterData = false;
      this.hospitalsService.getRequestParams(formData.nameHospital, formData.typeOfProperty, formData.nameOfDepartments);
      this.hospitalsService.getFilteredHospital().subscribe((data: Hospital[]) => {
        if (data.length > 0) {
          this.isNoCameData = false;
          this.dialogRef.close({ data });
        } else {
          this.isNoCameData = true;
          this.open();
        }
      });
    } else {
      this.isNoEnterData = true;
      this.open();
    }
  }

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '40%';
    dialogConfig.data = {
      isNoCameData: this.isNoCameData,
      isNoEnterData: this.isNoEnterData
    };
    const dialogRef = this.dialog.open(ModalMessageComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res: { data: boolean }) => {
      if (res) {
        this.dialogRef.close();
      }
    });
  }
}
