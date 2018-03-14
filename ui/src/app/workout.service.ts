import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class WorkoutService {

  private workoutUrl = this.dataService.endpointUrl + "workout/";
  private workoutTxnUrl = this.dataService.endpointUrl + "workoutTxn/"
  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }
  
  
  getWorkouts(userId: String): Observable<any>{
    return this.http.get<any>(this.workoutUrl + userId);
  }

  addWorkouts(workout: any): Observable<any>{
    let body = {
      "title" : workout.title,
	    "calBurntPerUnitTime" : workout.calBurntPerUnitTime,
	    "unitTime" : workout.unitTime,
	    "user" : {
		    "userId" : this.dataService.userId
	      }
      }
    return this.http.post<any>(this.workoutUrl,body);
  }

  getWorkoutTxn(): Observable<any>{
    return this.http.get<any>(this.workoutTxnUrl + this.dataService.workoutId);
  }

  addWorkoutTxn(txn: any): Observable<any>{
    let body = {
      "startTime": txn.startTime,
      "stopTime": txn.endTime,
      "workout":{
                  "workoutId": this.dataService.workoutId,
                  "calBurntPerUnitTime":this.dataService.workout[1],
                  "title": this.dataService.workout[2],
                  "unitTime":this.dataService.workout[3],
                  "user":{
                           "userId":this.dataService.userId
                  }

      }
    }
    return this.http.post<any>(this.workoutTxnUrl,body);
  }
}
