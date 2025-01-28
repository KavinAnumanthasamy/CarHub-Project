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
  // Component logic here
} 