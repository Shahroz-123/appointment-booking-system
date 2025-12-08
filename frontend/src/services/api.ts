import api from '../lib/api';
import {
  Branch,
  Appointment,
  CreateAppointmentDto,
  AppointmentsListResponse,
  AvailableSlotsResponse,
  AppointmentStatus
} from '../types';

export const branchService = {
  getAll: async (): Promise<Branch[]> => {
    const response = await api.get<Branch[]>('/api/branches');
    return response.data;
  },

  getById: async (id: string): Promise<Branch> => {
    const response = await api.get<Branch>(`/api/branches/${id}`);
    return response.data;
  },
};

export const appointmentService = {
  create: async (data: CreateAppointmentDto): Promise<Appointment> => {
    const response = await api.post<Appointment>('/api/appointments', data);
    return response.data;
  },

  getById: async (id: string): Promise<Appointment> => {
    const response = await api.get<Appointment>(`/api/appointments/${id}`);
    return response.data;
  },

  list: async (params?: {
    branchId?: string;
    status?: AppointmentStatus;
    date?: string;
    page?: number;
    limit?: number;
  }): Promise<AppointmentsListResponse> => {
    const response = await api.get<AppointmentsListResponse>('/api/appointments', { params });
    return response.data;
  },

  update: async (
    id: string,
    data: Partial<Appointment>
  ): Promise<Appointment> => {
    const response = await api.patch<Appointment>(`/api/appointments/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/api/appointments/${id}`);
  },

  getAvailableSlots: async (
    branchId: string,
    date: string
  ): Promise<string[]> => {
    const response = await api.get<AvailableSlotsResponse>('/api/appointments/available-slots', {
      params: { branchId, date },
    });
    return response.data.availableSlots;
  },
};
