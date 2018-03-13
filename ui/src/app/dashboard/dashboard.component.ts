import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  workouts: any = {};

  constructor(
    private dataService: DataService,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    console.log(" sdfsf ", this.dataService.userId);
    this.workoutService.getWorkouts(this.dataService.userId).subscribe(
      data => { this.workouts = data
    }
    );
  }

}
