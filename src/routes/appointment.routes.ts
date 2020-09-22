import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentRepo from '../repositories/AppointmentRepo';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentRouter = Router();
const appointmentsRepo = new AppointmentRepo();

appointmentRouter.get('/', (req, res) => {
  const appointments = appointmentsRepo.allAppointments();

  return res.json(appointments);
})

appointmentRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);
  
    const createAppointment = new CreateAppointmentService(appointmentsRepo);
  
    const appointment = createAppointment.execute({ date: parsedDate, provider });
  
    return res.json(appointment);  
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
})

export default appointmentRouter;  