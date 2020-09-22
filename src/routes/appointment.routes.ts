import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentRepo from '../repositories/AppointmentRepo';

const appointmentRouter = Router();
const appointmentsRepo = new AppointmentRepo();

appointmentRouter.get('/', (reqm, res) => {
  const appointments = appointmentsRepo.allAppointments();

  return res.json(appointments);
})

appointmentRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const formatedDate = startOfHour(parseISO(date));

  const findAppointmentSameDate = appointmentsRepo.findByDate(formatedDate);

  if (findAppointmentSameDate) {
    return res
      .status(400)
      .json({ message: 'Hour already filled'});
  }
   
  const appointment = appointmentsRepo.create({
    provider,
    date: formatedDate,
  });

  return res.json(appointment);
})

export default appointmentRouter;  