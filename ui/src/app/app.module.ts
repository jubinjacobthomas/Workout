import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert/alert.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { DataService } from './data.service';
import { WorkoutService } from './workout.service';
import { WorkoutTxnComponent } from './workout-txn/workout-txn.component';
import { AddworkoutTxnComponent } from './addworkout-txn/addworkout-txn.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlertComponent,
    AddWorkoutComponent,
    WorkoutTxnComponent,
    AddworkoutTxnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    RegisterService,
    AlertService,
    DataService,
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
