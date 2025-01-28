import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarService, ServicePackage } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private baseUrl = 'http://localhost:8081'; // Update to match your backend API

  constructor(private http: HttpClient) { }

  // Services
 
  getServices(): Observable<CarService[]> {
    return this.http.get<CarService[]>(`${this.baseUrl}/car-services`);
  }

  deleteService(id: number): Observable<void> {
    // Return a mock successful response
    return of(void 0);
  }
} 