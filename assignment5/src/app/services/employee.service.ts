import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesURL:string = 'http://teams-api-data.herokuapp.com/employees';

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesURL);
  }
}
