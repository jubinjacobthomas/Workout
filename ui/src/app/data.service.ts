import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  constructor() { }

  public endpointUrl = "http://localhost:8080/"
  public userId: String;
  public workoutId: String;

}
