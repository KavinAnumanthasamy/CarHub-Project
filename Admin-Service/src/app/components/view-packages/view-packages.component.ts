import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPackageService } from '../../services/car-package.service';
import { ServicePackage } from '../../models/service.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-packages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css']
})
export class ViewPackagesComponent implements OnInit {
  packages: ServicePackage[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private packageService: CarPackageService) {}

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

  deletePackage(id: number) {
    if (confirm('Are you sure you want to delete this package?')) {
      // Implement delete functionality here
      console.log('Deleting package:', id);
    }
  }
} 