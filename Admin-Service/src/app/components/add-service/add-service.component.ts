import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarServiceService } from '../../services/car-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  serviceForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private carService: CarServiceService,
    private router: Router
  ) {
    // Initialize the form with validation
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Submit method
  onSubmit() {
    if (this.serviceForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';
      this.successMessage = '';

      const serviceData = {
        ...this.serviceForm.value,
        id: null // Ensure id is null for new services
      };

      // Call the service to add the new car service
      this.carService.addService(serviceData).subscribe({
        next: (response) => {
          console.log('Service added successfully', response);
          this.successMessage = 'Service added successfully!';
          this.serviceForm.reset();

          // Navigate to the services list view after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/view-services']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error adding service', error);
          this.errorMessage = 'Failed to add service. Please try again.';
          this.isSubmitting = false;
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
