export interface Booking {
  id?: number;
  clientName: string;
  vehicleNumber: string;
  phoneNumber: string;
  appointmentDate: Date | string;
  serviceId?: number;
  packageId?: number;
  serviceName?: string;
  totalAmount: number;
} 