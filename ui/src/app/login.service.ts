import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class LoginService {

  private loginUrl = this.dataService.endpointUrl + "user/login";
  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  login(username: string, password: string): Observable<any>{
    let headers = new HttpHeaders()
            .set('userName', username)
            .set('password', password);

    return this.http.get<any>(this.loginUrl, {headers});
  }

}
