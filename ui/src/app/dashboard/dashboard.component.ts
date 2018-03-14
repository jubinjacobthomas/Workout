import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  workouts: any = {};

  constructor(
    private dataService: DataService,
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.workoutService.getWorkouts(this.dataService.userId).subscribe(
      data => { 
        this.workouts = data;
    }
    );
  }

  goToTxn(workout:any){
    this.dataService.workout = workout;
    this.dataService.workoutId = workout[0];
    this.router.navigate(['workouttxn']);
  }


}
