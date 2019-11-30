import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Position } from '../models/position';

import { PositionService } from '../services/position.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  paramSubscription:any;
  positionSubscription:any;
  savePositionSubscription:any;
  position:Position;
  successMessage:boolean=false;
  failMessage: boolean=false;

  constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activeRoute.params.subscribe((params) =>{
      this.positionSubscription = this.positionService.getPosition(params['id']).subscribe(position =>{
        this.position = position[0];
      })
    })
  }

  onSubmit(f: NgForm): void{
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(pos => {
      this.successMessage = true;
      setTimeout(()=>{ this.successMessage = false}, 2500);
    }, error =>{
      this.failMessage = true;
      setTimeout(()=>{ this.failMessage = false}, 2500);
    })
  }

  ngOnDestroy(){
    if (this.savePositionSubscription != null) { this.savePositionSubscription.unsubscribe()}
    if (this.positionSubscription != null) { this.positionSubscription.unsubscribe()}
    if (this.paramSubscription != null) { this.paramSubscription.unsubscribe()}
  }

}
