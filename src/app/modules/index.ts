import { ClinicsModule } from './clinics/clinics.module';
import { LabsModule } from './labs/labs.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { ViewsModule } from './views/views.module';
import { PrivateDoctorsModule } from './private-doctors/private-doctors.module';
import { HospitalsModule } from './hospitals/hospitals.module';

export const modules = [
  ClinicsModule,
  LabsModule,
  PharmaciesModule,
  ViewsModule,
  PrivateDoctorsModule,
  HospitalsModule
];
