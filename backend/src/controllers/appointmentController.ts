import { Request, Response, NextFunction } from 'express';
import { AppointmentService } from '../services/appointmentService';

const appointmentService = new AppointmentService();

export const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    next(error);
  }
};

export const getAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointment = await appointmentService.getAppointment(req.params.id);
    res.json(appointment);
  } catch (error) {
    next(error);
  }
};

export const listAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await appointmentService.listAppointments(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointment = await appointmentService.updateAppointment(
      req.params.id,
      req.body
    );
    res.json(appointment);
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await appointmentService.deleteAppointment(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const getAvailableTimeSlots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { branchId, date } = req.query;
    const slots = await appointmentService.getAvailableTimeSlots(
      branchId as string,
      date as string
    );
    res.json({ availableSlots: slots });
  } catch (error) {
    next(error);
  }
};
