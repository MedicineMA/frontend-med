import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { ModalFilterComponent } from './components/modal-filter/modal-filter.component';
import { PharmacyMoreInfoComponent } from './components/pharmacy-more-info/pharmacy-more-info.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ModalFilterComponent,
    PharmacyMoreInfoComponent,
    MapComponent
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
    ModalFilterComponent,
    PharmacyMoreInfoComponent,
    MapComponent
  ]
})
export class PharmaciesModule { }
