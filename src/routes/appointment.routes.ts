import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentRouter = Router();

const appointments: Appointment[] = [];

appointmentRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const formatedDate = startOfHour(parseISO(date));

  const findAppointmentSameDate = appointments.find(appointment =>
    isEqual(formatedDate, appointment.date),
    );

  if (findAppointmentSameDate) {
    return res
      .status(400)
      .json({ message: 'Hour already filled'});
  }

  const appointment = new Appointment(provider, formatedDate);
   
  appointments.push(appointment);

  return res.json(appointment);
})

export default appointmentRouter;  