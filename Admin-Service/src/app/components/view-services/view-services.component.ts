import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../../models/service.model';
import { CarServiceService } from '../../services/car-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {
  services: CarService[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private carService: CarServiceService) {}

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

  deleteService(id: number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.carService.deleteService(id).subscribe({
        next: () => {
          this.services = this.services.filter(service => service.id !== id);
        },
        error: (error) => {
          console.error('Error deleting service', error);
          alert('Failed to delete service. Please try again.');
        }
      });
    }
  }
} 