import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmOverlays } from 'agm-overlays';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './components/header/header.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { appDirectives } from 'src/app/directives';
import { appPipes } from 'src/app/pipes';
import { DetailsComponent } from './components/details/details.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalMessageComponent,
    StarsRatingComponent,
    ...appDirectives,
    ...appPipes,
    DetailsComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AgmOverlays,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    ModalMessageComponent,
    StarsRatingComponent,
    DetailsComponent,
    PreloaderComponent,
    ...appDirectives,
    ...appPipes,
  ]
})
export class SharedModule { }
