import { startOfHour, parseISO } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentRepo';

interface Request {
  provider: string;
  date: Date;
}
class CreateAppointmentService {
  public appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }
  public execute({ date, provider}: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentSameDate = this.appointmentsRepository.findByDate(appointmentDate);
  
    if (findAppointmentSameDate) {
      throw Error("Hour already filled");
      
    }
     
    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;