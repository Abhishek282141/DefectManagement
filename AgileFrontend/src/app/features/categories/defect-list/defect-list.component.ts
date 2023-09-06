import { Component } from '@angular/core';
import { AddDefectRequest } from '../models/new-defect-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent {

  developerId: String;
  responseData: any;

  constructor(private categoryService: CategoryService) {
    this.developerId = "";
    this.responseData = [];
  }

  onLoad() {
    console.log("button clicked!")
    console.log("data: ", this.developerId)
    this.categoryService.getDefect(this.developerId)
    .subscribe({
      next: (response) => {
        this.responseData = response
        console.log(response)
      }
    })
  }
}


