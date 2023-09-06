import { Component } from '@angular/core';
 import {AddDefectRequest} from '../models/new-defect-request.model';
import { CategoryService } from '../services/category.service';
 @Component({
   selector: 'app-new-defect',
   templateUrl: './new-defect.component.html',
   styleUrls: ['./new-defect.component.css']
 })
 export class NewDefectComponent {
   model: AddDefectRequest;

   constructor(private categoryService: CategoryService){
   this.model = {
     title: '',
     defectDetails: '',
    stepsToReproduce: '',
     priority: 0,
     reportedByTesterId: '',
     assignedToDeveloperId: '',
    severity: 0,
     status: '',
    projectCode: 0,

  };
 }

   onSubmit() {
     // Handle form submission logic here
     // You can send the data to your backend API for processing
     // Display an acknowledgement to the user upon successful submission
    // console.log('Form submitted:', this.model);
     this.model.priority=Number(this.model.priority);
     this.model.severity=Number(this.model.severity);
    this.categoryService.addDefect(this.model)
     .subscribe({
      next: (response) =>{
         console.log('This was successful!');
      }
     })
   }
 }


 