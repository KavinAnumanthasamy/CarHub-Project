import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarService, ServicePackage } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private baseUrl = 'http://localhost:8081'; // Update to match your backend API

  constructor(private http: HttpClient) { }

  // Services
  addService(service: CarService): Observable<CarService> {
    return this.http.post<CarService>(`${this.baseUrl}/car-services`, service);
  }

  getServices(): Observable<CarService[]> {
    return this.http.get<CarService[]>(`${this.baseUrl}/car-services`);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/car-services/${id}`);
  }

  // Packages
  
} 