import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];
  loadingError=false;
  getEmployeesSub:any;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    try {
      this.getEmployeesSub = this.employeeService.getEmployees().subscribe(employees => {
        this.employees = employees;
      })
    } catch {
      this.loadingError = true;
    }
  }

  ngOnDestroy(){
    if (this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
