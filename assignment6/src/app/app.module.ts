import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { PositionsComponent } from './positions/positions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    EmployeesComponent,
    HomeComponent,
    PositionsComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
