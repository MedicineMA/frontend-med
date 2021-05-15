import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LabFormValueModel } from 'src/app/models/lab-form-value.model';
import { Lab } from 'src/app/models/lab.model';
import { LabsService } from 'src/app/services/labs.service';
import { ModalMessageComponent } from 'src/app/modules/shared/components/modal-message/modal-message.component';

@Component({
  selector: 'app-labs-modal-filter',
  templateUrl: './labs-modal-filter.component.html',
  styleUrls: ['./labs-modal-filter.component.css']
})
export class LabsModalFilterComponent {

  labForm!: FormGroup;
  public id!: number;
  public allTests!: string[];
  public isNoCameData = false;
  public isNoEnterData = false;

  constructor(
    public dialogRef: MatDialogRef<LabsModalFilterComponent>,
    private labsService: LabsService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public labsData?: Lab[],
  ) {
    this.labForm = formBuilder.group({
      nameLab: [[]],
      tests: [[]]
    });
    this.getAllTests();
  }

  public getIdStar(newId: number): void {
    this.id = newId;
  }

  initializeFormGroup(): void {
    this.labForm.setValue({
      nameLab: [],
      tests: []
    });
  }

  updateValue(value: LabFormValueModel): void {
    this.labForm.setValue({
      nameLab: value.nameLab,
      tests: value.tests
    });
  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({ data: this.labsData });
  }

  saveData(): void {
    const labForm = this.labForm.value as LabFormValueModel;
    if (labForm.tests.length > 0 || labForm.nameLab.length > 0 || this.id) {
      this.updateValue(this.labForm.value);
      this.isNoEnterData = false;
      const params = this.labsService.getRequestParams(labForm.nameLab, labForm.tests, this.id);
      this.labsService.getFilterLabs(params).subscribe(
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

  public getAllTests(): void {
    this.labsService.getAllTests().subscribe((data: string[]) => {
      this.allTests = data;
    });
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
