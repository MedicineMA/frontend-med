import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { ClinicsModalFilterComponent } from './components/clinics-modal-filter/clinics-modal-filter.component';
import { ClinicMoreInfoComponent } from './components/clinic-more-info/clinic-more-info.component';
import { MapClinicsComponent } from './components/map-clinics/map-clinics.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    MapClinicsComponent,
    ClinicsModalFilterComponent,
    ClinicMoreInfoComponent
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
    MapClinicsComponent,
    ClinicsModalFilterComponent,
    ClinicMoreInfoComponent
  ]
})
export class ClinicsModule { }
