import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointment {
  provider: string; 
  date: Date;
}

class AppointmentRepo {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public allAppointments(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppoint = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
      );  

      return findAppoint || null;
  }

  public create({ date, provider }: CreateAppointment): Appointment {
    const appointment = new Appointment({ date, provider });

    this.appointments.push(appointment);

    return(appointment);
  }
}

export default AppointmentRepo;