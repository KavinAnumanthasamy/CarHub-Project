import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../../models/service.model';
import { CarServiceService } from '../../services/car-service.service';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-view-services',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {
  services: CarService[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private carService: CarServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.isLoading = true;
    this.errorMessage = '';

    this.carService.getServices().subscribe({
      next: (services) => {
        this.services = services;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading services', error);
        this.errorMessage = 'Failed to load services. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  bookService(service: CarService) {
    const dialogRef = this.dialog.open(BookingFormComponent, {
      width: '500px',
      data: { service }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Booking confirmed successfully!');
      }
    });
  }
}
  