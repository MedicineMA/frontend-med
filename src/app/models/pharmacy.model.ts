export interface Pharmacy {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  schedules: Schedule[];
  isWork: boolean;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Schedule {
  dayOfWeek: string;
  timeStartOfWorkDay: string;
  timeEndOfWorkDay: string;
}
