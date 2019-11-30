import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Employee } from '../models/employee';
import { EmployeeRaw } from '../models/employeeRaw';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  employeeURL = "http://teams-api-data.herokuapp.com/";
  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeURL}employees`);
  }

  saveEmployee(emp: EmployeeRaw):Observable<any>{
    return this.http.put<any>(`${this.employeeURL}employee/${emp._id}`, emp);
  }

  getEmployee(id: string):Observable<EmployeeRaw[]>{
    return this.http.get<EmployeeRaw[]>(`${this.employeeURL}employee/${id}`);
  }
}
