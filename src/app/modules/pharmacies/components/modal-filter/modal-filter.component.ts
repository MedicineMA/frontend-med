import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PharmacyService } from 'src/app/services/pharmacies.service';
import { PharmFormValueModel } from 'src/app/models/pharm-form-value.model';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { ModalMessageComponent } from 'src/app/modules/shared/components/modal-message/modal-message.component';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})
export class ModalFilterComponent {

  pharmForm!: FormGroup;
  public id!: number;
  public isNoCameData = false;
  public isNoEnterData = false;

  constructor(
    public dialogRef: MatDialogRef<ModalFilterComponent>,
    private pharmacyService: PharmacyService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public pharmaciesData?: Pharmacy[],
  ) {
    this.pharmForm = formBuilder.group({
      namesPharm: [[]],
      isWork: [false]
    });
  }

  public getIdStar(newId: number): void {
    this.id = newId;
  }

  initializeFormGroup(): void {
    this.pharmForm.setValue({
      namesPharm: [],
      isWork: false
    });
  }

  updateValue(value: PharmFormValueModel): void {
    this.pharmForm.setValue({
      namesPharm: value.namesPharm,
      isWork: value.isWork
    });
  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({ data: this.pharmaciesData });
  }

  saveData(): void {
    const pharmForm = this.pharmForm.value as PharmFormValueModel;
    if (pharmForm.namesPharm.length > 0 || pharmForm.isWork || this.id) {
      this.isNoEnterData = false;
      this.updateValue(this.pharmForm.value);
      const params = this.pharmacyService.getRequestParams(pharmForm.namesPharm, pharmForm.isWork, this.id);
      this.pharmacyService.getFilterPharmacy(params).subscribe(
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
