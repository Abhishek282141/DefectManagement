 import { Injectable } from '@angular/core';
import { AddDefectRequest } from '../models/new-defect-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  addDefect(model:AddDefectRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7179/api/Defect/AddDefect',model)

  }
}
