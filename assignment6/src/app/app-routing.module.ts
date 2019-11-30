import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PositionsComponent } from "./positions/positions.component";
import { PositionComponent } from "./position/position.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'positions', component: PositionsComponent},
  { path: 'employee/:id', component: EmployeeComponent}, 
  { path: 'position/:id', component: PositionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
