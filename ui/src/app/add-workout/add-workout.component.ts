import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {

  workout: any = {};
  loading = false;

  constructor(
    private dataService: DataService,
    private workoutService: WorkoutService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  addWorkout(){
    this.workoutService.addWorkouts(this.workout)
    .subscribe(
      data => {
          this.alertService.success('Workout Created successfully', true);
          this.router.navigate(['dashboard']);
      },
      error => {
          this.alertService.error(error.error.message);
          this.router.navigate(['dashboard']);
          this.loading = false;
      });
  }
}
