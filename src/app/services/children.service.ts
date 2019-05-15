import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ChildrenService {

  constructor(private http: HttpClient) { }
  create(id, children) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http
        .post(`${environment.host}/api/children/create/${id}`, JSON.stringify(children), {
          headers: headers
        })
        .map(res => {
          return res;
        });
  }

    get(id) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return this.http.get(`${environment.host}/api/children/get/${id}`, {headers : headers}).map(res => res);
    }
}
