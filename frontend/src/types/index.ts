export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
  openingTime: string;
  closingTime: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface Appointment {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  purpose: string;
  notes?: string;
  status: AppointmentStatus;
  branchId: string;
  branch?: Branch;
  confirmationSent: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentDto {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  purpose: string;
  notes?: string;
  branchId: string;
}

export interface AppointmentsListResponse {
  appointments: Appointment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AvailableSlotsResponse {
  availableSlots: string[];
}
