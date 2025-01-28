import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPackageService } from '../../services/car-package.service';
import { ServicePackage } from '../../models/service.model';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-view-packages',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css']
})
export class ViewPackagesComponent implements OnInit {
  packages: ServicePackage[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private packageService: CarPackageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.isLoading = true;
    this.errorMessage = '';

    this.packageService.getPackages().subscribe({
      next: (packages: ServicePackage[]) => {
        this.packages = packages;
        this.isLoading = false;
      },
      error: (error: Error) => {
        console.error('Error loading packages', error);
        this.errorMessage = 'Failed to load packages. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  bookPackage(servicePackage: ServicePackage) {
    const dialogRef = this.dialog.open(BookingFormComponent, {
      width: '500px',
      data: { package: servicePackage }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('Booking confirmed successfully!');
      }
    });
  }
} 