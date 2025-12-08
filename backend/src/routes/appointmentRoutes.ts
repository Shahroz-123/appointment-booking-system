import { Router } from 'express';
import {
  createAppointment,
  getAppointment,
  listAppointments,
  updateAppointment,
  deleteAppointment,
  getAvailableTimeSlots
} from '../controllers/appointmentController';
import { validate } from '../middleware/validation';
import {
  createAppointmentSchema,
  getAppointmentSchema,
  listAppointmentsSchema,
  updateAppointmentSchema
} from '../schemas/appointmentSchemas';

const router = Router();

router.post('/', validate(createAppointmentSchema), createAppointment);
router.get('/', validate(listAppointmentsSchema), listAppointments);
router.get('/available-slots', getAvailableTimeSlots);
router.get('/:id', validate(getAppointmentSchema), getAppointment);
router.patch('/:id', validate(updateAppointmentSchema), updateAppointment);
router.delete('/:id', validate(getAppointmentSchema), deleteAppointment);

export default router;
