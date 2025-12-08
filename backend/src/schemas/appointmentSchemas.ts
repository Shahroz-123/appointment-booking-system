import { z } from 'zod';

export const createAppointmentSchema = z.object({
  body: z.object({
    customerName: z.string().min(2, 'Name must be at least 2 characters'),
    customerEmail: z.string().email('Invalid email address'),
    customerPhone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number'),
    appointmentDate: z.string().refine((date) => {
      const appointmentDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return appointmentDate >= today;
    }, 'Appointment date must be in the future'),
    appointmentTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
    purpose: z.string().min(5, 'Purpose must be at least 5 characters'),
    notes: z.string().optional(),
    branchId: z.string().uuid('Invalid branch ID')
  })
});

export const updateAppointmentSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid appointment ID')
  }),
  body: z.object({
    status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED']).optional(),
    appointmentDate: z.string().optional(),
    appointmentTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
    notes: z.string().optional()
  })
});

export const getAppointmentSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid appointment ID')
  })
});

export const listAppointmentsSchema = z.object({
  query: z.object({
    branchId: z.string().uuid().optional(),
    status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED']).optional(),
    date: z.string().optional(),
    page: z.string().regex(/^\d+$/).transform(Number).optional(),
    limit: z.string().regex(/^\d+$/).transform(Number).optional()
  })
});
