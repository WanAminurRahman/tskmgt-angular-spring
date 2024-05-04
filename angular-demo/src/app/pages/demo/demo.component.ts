import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TaskManagementService } from '../../services/task-management-service/task-management.service';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommsService } from '../../services/communication-service/comms.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    FormsModule
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
  data: any;
  data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  boolAdd: boolean = false;

  editTitleIndex: any;
  editDescIndex: any;

  constructor(
    private taskManagement: TaskManagementService,
    private router: Router,
    private comms: CommsService
  ) {
    this.comms.registerCall('fetchData', this.fetchData.bind(this))
  }

  ngOnInit(): void {
    this.fetchData()
    
    if (this.router.url == '/demo/add-task') {
      this.boolAdd = true;
    } else {
      this.boolAdd = false;
    }
  }

  fetchData() {
    this.taskManagement.fetchTask().subscribe((res) => {
      this.data = res;
      console.log(this.data)
      this.data$.next(this.data);
    })
  }

  updateData(req: any) {
    this.taskManagement.updateTask(req).subscribe((res) => {
      console.log('UPDATE', res);
      this.editTitleIndex = null;
      this.editDescIndex = null;
      this.fetchData();
    })
  }

  statusUpdate(req: any, event: any) {
    if (event.target.checked) {
      req.status = 'COMPLETE'
    } else {
      req.status = 'INCOMPLETE'
    }
    this.updateData(req);
  }

  deleteTask(req: any) {
    this.taskManagement.deleteTask(req).subscribe((res) => {
      console.log("DELETED!", res)
      this.fetchData();
    })
  }

}
