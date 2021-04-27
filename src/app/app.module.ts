import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CategoryPageComponent } from './views/category-page/category-page.component';
import { PharmacyMoreInfoComponent } from './components/pharmacy-more-info/pharmacy-more-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { PharmacyDetailsComponent } from './components/pharmacy-details/pharmacy-details.component';
import { ModalFilterComponent } from './components/modal-filter/modal-filter.component';
import { StarsRatingComponent } from './shared/stars-rating/stars-rating.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';
import { HospitalMoreInfoComponent } from './components/hospital-more-info/hospital-more-info.component';
import { ModalFilterHospitalsComponent } from './components/modal-filter-hospitals/modal-filter-hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CategoryPageComponent,
    PharmacyMoreInfoComponent,
    HeaderComponent,
    PharmacyDetailsComponent,
    ModalFilterComponent,
    StarsRatingComponent,
    HospitalsComponent,
    HospitalDetailsComponent,
    HospitalMoreInfoComponent,
    ModalFilterHospitalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: NG_APP_ENVS.gaMapsApiKey,
      libraries: ['places']
    }),
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    HttpClient,
    MapComponent,
    HospitalsComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [MapComponent]
})
export class AppModule { }
