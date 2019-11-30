import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Position } from '../models/position'
import { PositionService } from '../services/position.service';
import { EmployeeService } from '../services/employee.service';
import { EmployeeRaw } from '../models/employeeRaw';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  paramSubscription:any;
  employeeSubscription:any;
  getPositionSubscription:any;
  saveEmployeeSubscription:any;
  employee:EmployeeRaw;
  positions: Position[];
  successMessage=false;
  failMessage=false;

  constructor(private positionService: PositionService, private activeRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.paramSubscription = this.activeRoute.params.subscribe((params) => {
      this.employeeSubscription = this.employeeService.getEmployee(params['id']).subscribe((emp)=>{
        this.employee = emp[0];
        console.log(this.employee);

        this.getPositionSubscription = this.positionService.getPositions().subscribe((pos) =>{
          this.positions = pos;
        });
      });
    });
  }

  onSubmit():void{
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(()=>{
      this.successMessage = true;
      setTimeout(()=> {this.successMessage = false}, 2500);
    }, error => {
      this.failMessage= true;
      setTimeout(()=>{this.failMessage = false}, 2500);
    })
  }

  ngOnDestroy(){
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }
    if (this.getPositionSubscription){
      this.getPositionSubscription.unsubscribe();
    }
    if (this.saveEmployeeSubscription){
      this.saveEmployeeSubscription.unsubscribe();
    }
  }

}
