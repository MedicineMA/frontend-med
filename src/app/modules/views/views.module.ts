import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { CategoryPageComponent } from './components/category-page/category-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoryPageComponent
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
    CategoryPageComponent
  ]
})
export class ViewsModule { }
