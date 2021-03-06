import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertService } from '../alert.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
               this.dataService.userId = data.userId;
               this.router.navigate(['dashboard']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }

}
