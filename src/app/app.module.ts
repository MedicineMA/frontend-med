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
import { MapClinicsComponent } from './components/map-clinics/map-clinics.component';
import { ClinicMoreInfoComponent } from './components/clinic-more-info/clinic-more-info.component';
import { ClinicsModalFilterComponent } from './components/clinics-modal-filter/clinics-modal-filter.component';
import { MapLabsComponent } from './components/map-labs/map-labs.component';
import { LabMoreInfoComponent } from './components/lab-more-info/lab-more-info.component';
import { LabsModalFilterComponent } from './components/labs-modal-filter/labs-modal-filter.component';

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
    MapClinicsComponent,
    ClinicMoreInfoComponent,
    ClinicsModalFilterComponent,
    MapLabsComponent,
    LabMoreInfoComponent,
    LabsModalFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMcsvAybaFYmE8bAD8wY2CiEOx25ODtrY',
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
