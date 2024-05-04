import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskManagementService } from '../../../services/task-management-service/task-management.service';
import { CommsService } from '../../../services/communication-service/comms.service';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent {

  addTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('')
  })

  constructor(
    private taskManagement: TaskManagementService,
    private comms: CommsService 
  ){}

  addNewTask() {
    this.addTaskForm.value.status = 'INCOMPLETE';
    this.taskManagement.storeTask(this.addTaskForm.value).subscribe((res) => {
      console.log(res);
      this.comms.callFunction('fetchData');
      this.addTaskForm.reset();
    })
  }
}
