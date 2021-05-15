import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ModalFilterHospitalsComponent } from './components/modal-filter-hospitals/modal-filter-hospitals.component';
import { HospitalMoreInfoComponent } from './components/hospital-more-info/hospital-more-info.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';

@NgModule({
  declarations: [
    ModalFilterHospitalsComponent,
    HospitalMoreInfoComponent,
    HospitalsComponent,
    HospitalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AgmOverlays,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule
  ],
  providers: [],
  exports: [
    ModalFilterHospitalsComponent,
    HospitalMoreInfoComponent,
    HospitalsComponent,
    HospitalDetailsComponent
  ]
})
export class HospitalsModule { }
