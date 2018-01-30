import { Component } from '@angular/core';
import { Http, Response, JsonpModule, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'admin',
  templateUrl: 'templates/admin.html',
  styleUrls: [
    'css/admin.css'
  ]
})

export class AdminComponent {
  user = {
    login: '',
    password: ''
  };

  user_admin = false;
  login_session = 1;
  constructor(private http: Http) {
    this.checkLoginSession();
  }

  checkLoginSession() {
    this.http.get('http://localhost:3000/check-login-session',  {withCredentials: true})
    .map((res:Response) => res.json())
    .subscribe(data => {
      if(data.session == 1) {
        this.login_session = 1;
      } else if(data.session == 2) {
        this.login_session = 2;
      }
      this.updateLoginInfo();
    });
  }

  updateLoginInfo() {
    if(this.login_session == 1) {
      this.user_admin = false;
    } else if(this.login_session == 2) {
      this.user_admin = true;
    }
  }

  postLoginData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3000/check-login-data', JSON.stringify(this.user), {headers: headers, withCredentials: true} )
    .map((res:Response) => res.json())
    .subscribe(data => {
      if(data.type == 'error') {
        let error_element = document.getElementById("error_element");
        error_element.style.transform = "translate(0)";
        setTimeout(() => {
          error_element.style.opacity = "1";
        }, 250);
        setTimeout(() => {
          error_element.style.opacity = "0";
          setTimeout(() => {
            error_element.style.transform = "translate(0px, calc(-100% - 80px))";
          }, 500);
        }, 5000);
      } else if(data.type == 'success') {
        this.checkLoginSession();
      }
    });
  }

  updatePage() {
    location.reload();
  }
}
