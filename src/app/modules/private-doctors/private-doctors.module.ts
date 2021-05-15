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
import { ModalFilterPrivateDoctorsComponent } from './components/modal-filter-private-doctors/modal-filter-private-doctors.component';
import { PrivateDoctorsComponent } from './components/private-doctors/private-doctors.component';
import { PrivateDoctorDetailsComponent } from './components/private-doctor-details/private-doctor-details.component';

@NgModule({
  declarations: [
    ModalFilterPrivateDoctorsComponent,
    PrivateDoctorsComponent,
    PrivateDoctorDetailsComponent
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
    ModalFilterPrivateDoctorsComponent,
    PrivateDoctorsComponent,
    PrivateDoctorDetailsComponent
  ]
})
export class PrivateDoctorsModule { }
