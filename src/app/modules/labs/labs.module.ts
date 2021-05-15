import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { LabsModalFilterComponent } from './components/labs-modal-filter/labs-modal-filter.component';
import { LabMoreInfoComponent } from './components/lab-more-info/lab-more-info.component';
import { MapLabsComponent } from './components/map-labs/map-labs.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    LabsModalFilterComponent,
    LabMoreInfoComponent,
    MapLabsComponent
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
    LabsModalFilterComponent,
    LabMoreInfoComponent,
    MapLabsComponent
  ]
})
export class LabsModule { }
