import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  booking: Booking = {
    clientName: '',
    vehicleNumber: '',
    phoneNumber: '',
    appointmentDate: '',
    totalAmount: 0
  };

  minDate = new Date();

  constructor(
    private dialogRef: MatDialogRef<BookingFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookingService: BookingService
  ) {
    if (data.service) {
      this.booking.serviceId = data.service.id;
      this.booking.serviceName = data.service.name;
      this.booking.totalAmount = data.service.price;
    } else if (data.package) {
      this.booking.packageId = data.package.id;
      this.booking.serviceName = data.package.name;
      this.booking.totalAmount = data.package.totalPrice;
    }
  }

  onSubmit() {
    if (this.validateForm()) {
      this.bookingService.createBooking(this.booking).subscribe({
        next: (response) => {
          this.dialogRef.close(response);
        },
        error: (error) => {
          console.error('Error creating booking:', error);
          alert('Failed to create booking. Please try again.');
        }
      });
    }
  }

  validateForm(): boolean {
    if (!this.booking.clientName || !this.booking.vehicleNumber || 
        !this.booking.phoneNumber || !this.booking.appointmentDate) {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  }

  onCancel() {
    this.dialogRef.close();
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    const day = date.getDay();
    // Disable Sundays (0) and Saturdays (6)
    return day !== 0 && day !== 6;
  };
} 