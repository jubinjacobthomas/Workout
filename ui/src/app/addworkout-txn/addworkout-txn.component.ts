import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-addworkout-txn',
  templateUrl: './addworkout-txn.component.html',
  styleUrls: ['./addworkout-txn.component.css']
})
export class AddworkoutTxnComponent implements OnInit {

  txn: any = {};
  loading = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private workoutService: WorkoutService,
    private alertService: AlertService

  ) { }

  ngOnInit() {
  }

  addWorkoutTxn(){
    this.loading = true;
    var startDate = new Date(this.txn.startTime).toISOString();
    this.txn.startTime=startDate.replace('Z','');
    var endDate = new Date(this.txn.endTime).toISOString();
    this.txn.endTime=endDate.replace('Z','');
    this.workoutService.addWorkoutTxn(this.txn)
        .subscribe(
            data => {
                this.alertService.success('Transaction Successfully Added', true);
                this.router.navigate(['/workouttxn']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
}
