import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from "@angular/router";

import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];
  filteredEmployees:Employee[];
  loadingError=false;
  getEmployeesSub:any;

  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit() {
    try {
      this.getEmployeesSub = this.employeeService.getEmployees().subscribe(employees => {
        this.employees = employees;
        this.filteredEmployees = employees;
      })
    } catch {
      this.loadingError = true;
    }
  }

  routeEmployee(id: String) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event:any){
    this.filteredEmployees = this.employees.filter((employee)=>{
      return employee.FirstName.toLowerCase().includes(event.target.value) ||
        employee.LastName.toLowerCase().includes(event.target.value) ||
        employee.Position.PositionName.toLowerCase().includes(event.target.value);
    });
  }
  ngOnDestroy(){
    if (this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
