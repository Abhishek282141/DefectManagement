

// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api/Defect/AddDefect'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Define methods to interact with your API
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }
}
