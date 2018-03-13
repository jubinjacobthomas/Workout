import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { DataService } from './data.service';

@Injectable()
export class RegisterService {

  private registerUrl = this.dataService.endpointUrl +"user/register";
  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }
  
  register(user: any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}
