import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css']
})
export class MainpageComponent {
  // Add image paths
  logoPath = '/assets/images/logo.png';
  carMechanicPath = '/assets/images/carmechanic.jpeg';
  carRepairPath = '/assets/images/carrepair.jpg';
  transparencyPath = '/assets/images/transperency.png';
  qualityAssurancePath = '/assets/images/Quality Assurance.png';
  userConveniencePath = '/assets/images/User Convenience.png';
  accountabilityPath = '/assets/images/Accountability.png';
} 