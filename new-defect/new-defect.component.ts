import { Component } from '@angular/core';

@Component({
  selector: 'app-new-defect',
  templateUrl: './new-defect.component.html',
  styleUrls: ['./new-defect.component.css']
})
export class NewDefectComponent {
  defect = {
    title: '',
    defectDetails: '',
    StepsToReproduce: '',
    priority: '',
    reportedByTesterId: '',
    assignedToDeveloperId: '',
    severity: '',
    Status: '',
    ProjectCode: '',

  };

  onSubmit() {
    // Handle form submission logic here
    // You can send the data to your backend API for processing
    // Display an acknowledgement to the user upon successful submission
    console.log('Form submitted:', this.defect);
  }
}

