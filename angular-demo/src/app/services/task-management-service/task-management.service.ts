import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  apiUrl = 'http://localhost:8080/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(
    private http: HttpClient
  ) { }

  fetchTask() {
    return this.http.get(this.apiUrl + 'tasks', this.httpOptions);
  }

  storeTask(req: any): Observable<any> {
    return this.http.post(this.apiUrl + 'tasks', req, this.httpOptions);
  }

  fetchTaskById(req: any) {
    return this.http.get(this.apiUrl + 'tasks/' + req.id, this.httpOptions);
  }

  updateTask(req: any): Observable<any> {
    return this.http.put(this.apiUrl + 'tasks/' + req.id, req, this.httpOptions);
  }

  deleteTask(req: any): Observable<any> {
    return this.http.delete(this.apiUrl + 'tasks/' + req.id);
  }
}
