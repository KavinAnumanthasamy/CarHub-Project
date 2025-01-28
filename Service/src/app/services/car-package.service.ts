import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePackage } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class CarPackageService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
 

  getPackages(): Observable<ServicePackage[]> {
    return this.http.get<ServicePackage[]>(`${this.baseUrl}/packages`);
  }
} 