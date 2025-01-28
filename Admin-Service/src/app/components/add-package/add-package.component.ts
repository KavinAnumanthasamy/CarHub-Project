import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarPackageService } from '../../services/car-package.service';
import { CarServiceService } from '../../services/car-service.service';
import { ServicePackage, CarService } from '../../models/service.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  packageForm: FormGroup;
  availableServices: CarService[] = [];
  selectedServices: CarService[] = [];
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private packageService: CarPackageService,
    private carService: CarServiceService,
    private router: Router
  ) {
    this.packageForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.loadAvailableServices();
  }

  loadAvailableServices() {
    this.carService.getServices().subscribe({
      next: (services: CarService[]) => {
        this.availableServices = services;
      },
      error: (error: Error) => {
        console.error('Error loading services:', error);
        this.errorMessage = 'Error loading services. Please try again.';
      }
    });
  }

  onServiceSelect(event: any, service: CarService) {
    if (event.target.checked) {
      this.selectedServices.push(service);
    } else {
      this.selectedServices = this.selectedServices.filter(s => s.id !== service.id);
    }
  }

  calculateTotalPrice(): number {
    return this.selectedServices.reduce((total, service) => total + service.price, 0);
  }

  onSubmit() {
    if (this.packageForm.valid && this.selectedServices.length > 0) {
      const packageData: ServicePackage = {
        ...this.packageForm.value,
        services: this.selectedServices,
        totalPrice: this.calculateTotalPrice()
      };

      this.packageService.addPackage(packageData).subscribe({
        next: (response: ServicePackage) => {
          this.successMessage = 'Package created successfully!';
          this.packageForm.reset();
          this.selectedServices = [];
          this.router.navigate(['/view-packages']);
        },
        error: (error: Error) => {
          console.error('Error creating package:', error);
          this.errorMessage = 'Failed to create package. Please try again.';
        }
      });
    }
  }
}
