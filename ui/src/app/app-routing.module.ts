import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutTxnComponent } from './workout-txn/workout-txn.component';
import { AddworkoutTxnComponent } from './addworkout-txn/addworkout-txn.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path : 'addWorkout', component: AddWorkoutComponent },
  { path : 'workouttxn/:workoutId', component: WorkoutTxnComponent},
  { path : 'addworkouttxn', component: AddworkoutTxnComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}