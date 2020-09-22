import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns'
const appointmentRouter = Router();

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

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

  const appointment = {
    id: uuid(),
    provider,
    date: formatedDate,
  }
  appointments.push(appointment);

  return res.json(appointment);
})

export default appointmentRouter;  