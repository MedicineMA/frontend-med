import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Clinic } from 'src/app/models/clinic.model';
import { ClinicsService } from 'src/app/services/clinics.service';
import { ClinicsModalFilterComponent } from '../clinics-modal-filter/clinics-modal-filter.component';


@Component({
  selector: 'app-map-clinics',
  templateUrl: './map-clinics.component.html',
  styleUrls: ['./map-clinics.component.css']
})
export class MapClinicsComponent {

  public chosenClinic!: Clinic;

  public clinicsData!: Clinic[] | null;

  public clinics!: Clinic[];

  public isDisplayDetails = false;

  public zoom = 14;

  constructor(
    private clinicsService: ClinicsService,
    private dialog: MatDialog
  ) {
    setTimeout(()=>{this.getClinics()}, 5000)
    // this.getClinics();
  }

  public onZoomChange(newZoomValue: number): void {
    this.zoom = newZoomValue;
  }

  public getClinics(): void {
    this.clinicsService.getClinics().subscribe((data: Clinic[]) => {
      this.clinicsData = data;
      this.clinics = data;
    })
  }

  markerClicked(clinic: Clinic): void {
    this.isDisplayDetails = true;
    this.chosenClinic = clinic;
  }

  onClickCloseBtn(): void {
    this.isDisplayDetails = false;
  }

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.data = this.clinics;
    const dialogRef = this.dialog.open(ClinicsModalFilterComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res: { data: Clinic[] }) => {
      this.clinicsData = null;
       setTimeout(()=>{ this.clinicsData = res.data}, 5000)
    });
  }
}


