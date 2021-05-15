import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClinicsService } from 'src/app/services/clinics.service';
import { Clinic } from 'src/app/models/clinic.model';
import { ClinicFormValueModel } from 'src/app/models/сlinic-form-value.model';
import { ModalMessageComponent } from 'src/app/modules/shared/components/modal-message/modal-message.component';

@Component({
  selector: 'app-clinics-modal-filter',
  templateUrl: './clinics-modal-filter.component.html',
  styleUrls: ['./clinics-modal-filter.component.css']
})
export class ClinicsModalFilterComponent {

  id!: number;
  public allDoctors!: string[];
  clinicForm!: FormGroup;
  public isNoCameData = false;
  public isNoEnterData = false;

  constructor(
    public dialogRef: MatDialogRef<ClinicsModalFilterComponent>,
    private clinicsService: ClinicsService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public clinicsData?: Clinic[]
  ) {
    this.clinicForm = formBuilder.group({
      namesClinic: [''],
      doctors: [[]]
    });
    this.getAllDoctors();
  }

  public getIdStar(newId: number): void {
    this.id = newId;
    console.log(this.id);

  }

  public getAllDoctors(): void {
    this.clinicsService.getAllDoctors().subscribe((data: string[]) => {
      this.allDoctors = data;
    });
  }

  initializeFormGroup(): void {
    this.clinicForm.setValue({
      namesClinic: '',
      doctors: []
    });
  }

  updateValue(value: ClinicFormValueModel): void {
    this.clinicForm.setValue({
      namesClinic: value.namesClinic,
      doctors: value.doctors
    });

  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({ data: this.clinicsData });
  }

  saveData(): void {
    const clinicForm = this.clinicForm.value as ClinicFormValueModel;

    if (clinicForm.doctors.length > 0 || clinicForm.namesClinic || this.id) {
      this.updateValue(this.clinicForm.value);
      this.isNoEnterData = false;
      const params = this.clinicsService.getRequestParams(clinicForm.doctors, clinicForm.namesClinic, this.id);
      this.clinicsService.getFilterClinic(params).subscribe(
        (data) => {
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
