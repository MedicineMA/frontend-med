import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrivateDoctorFormValue } from 'src/app/models/private-doctors-form-value.model';
import { PrivateDoctor } from 'src/app/models/private-doctors.model';
import { ModalMessageComponent } from 'src/app/modules/shared/components/modal-message/modal-message.component';
import { PrivateDoctorsService } from 'src/app/services/private-doctors-service';

@Component({
  selector: 'app-modal-filter-private-doctors',
  templateUrl: './modal-filter-private-doctors.component.html',
  styleUrls: ['./modal-filter-private-doctors.component.css']
})
export class ModalFilterPrivateDoctorsComponent {

  privateDoctorForm: FormGroup;

  public isNoCameData = false;
  public isNoEnterData = false;

  allSpecializations: string[] = [];

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalFilterPrivateDoctorsComponent>,
    private privateDoctorsService: PrivateDoctorsService,
    @Inject(MAT_DIALOG_DATA) public privateDoctorsData?: PrivateDoctor[]
  ) {
    this.privateDoctorForm = this.formBuilder.group({
      namePrivateDoctor: [''],
      specializationOfDoctor: ['']
    });
    this.getAllSpecialization();
  }

  onClose(): void {
    this.dialogRef.close({ data: this.privateDoctorsData });
  }

  saveData(): void {
    const formData = this.privateDoctorForm.value as PrivateDoctorFormValue;
    if (formData.namePrivateDoctor.length > 0 || formData.specializationOfDoctor.length > 0) {
      this.isNoEnterData = false;
      this.privateDoctorsService.getRequestParams(formData.namePrivateDoctor, formData.specializationOfDoctor);
      this.privateDoctorsService.getFilteredPrivateDoctors().subscribe((data: PrivateDoctor[]) => {
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

  public getAllSpecialization(): void {
    this.privateDoctorsService.getAllSpecialization().subscribe((data: string[]) => {
      this.allSpecializations = data;
    });
  }
}
