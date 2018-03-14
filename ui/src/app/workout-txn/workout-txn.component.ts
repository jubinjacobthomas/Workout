import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { DataService } from '../data.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-txn',
  templateUrl: './workout-txn.component.html',
  styleUrls: ['./workout-txn.component.css']
})
export class WorkoutTxnComponent implements OnInit {

  workoutsTxns: any = {};

  constructor(
    private workoutService: WorkoutService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.workoutService.getWorkoutTxn().subscribe(
      data => { this.workoutsTxns = data
      }
    );
  }

  addWorkoutTxn(){
    this.router.navigate(['addworkouttxn']);
  }

  backRedirect(){
    this.router.navigate(['dashboard']);
  }

}
