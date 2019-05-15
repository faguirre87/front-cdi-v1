import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import "rxjs/Rx";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http
      .post(`${environment.host}/api/auth/login`, JSON.stringify(user), {
        headers: headers
      })
      .map(res => res)
  }

  register(user) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http
      .post(`${environment.host}/api/user/register`, JSON.stringify(user), {
        headers: headers
      })
      .map(res => {
        return res;
      });
  }

  getUser() {
    return this.http.get(`/api/user/get`)
        .map(res => res);
  }
}
