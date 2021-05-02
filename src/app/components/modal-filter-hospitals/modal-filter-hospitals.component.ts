import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HospitalFormValueModel } from 'src/app/models/hospital-form-value.model';
import { Hospital } from 'src/app/models/hospitals.model';
import { HospitalsService } from 'src/app/services/hospitals.service';

@Component({
  selector: 'app-modal-filter-hospitals',
  templateUrl: './modal-filter-hospitals.component.html',
  styleUrls: ['./modal-filter-hospitals.component.css']
})
export class ModalFilterHospitalsComponent {

  hospitalForm: FormGroup;

  hospitalsData!: Hospital[];

  constructor(
    public dialogRef: MatDialogRef<ModalFilterHospitalsComponent>,
    private hospitalsService: HospitalsService,
    private formBuilder: FormBuilder
  ) {
    this.hospitalForm = this.formBuilder.group({
      nameHospital: [''],
      typeOfProperty: [''],
      nameOfDepartments: ['']
    });
    this.getHospitals();
  }

  onClose(): void {
    this.dialogRef.close({data: this.hospitalsData});
  }

  saveData(): void {
    const formData = this.hospitalForm.value as HospitalFormValueModel;

    this.hospitalsService.getRequestParams(formData.nameHospital, formData.typeOfProperty, formData.nameOfDepartments);
    this.hospitalsService.getFilteredHospital().subscribe((data: Hospital[]) => {
      this.dialogRef.close({event: 'close', data});
    });
  }

  public getHospitals(): void {
    this.hospitalsService.getHospitals().subscribe((data: Hospital[]) => {
      this.hospitalsData = data;
    });
  }
}