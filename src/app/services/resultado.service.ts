import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import "rxjs/Rx";

@Injectable({
    providedIn: "root"
})
export class ResultService {
    constructor(private http: HttpClient) { }
    getResultPadre(id) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return this.http.get(`${environment.host}/api/result/resultPadre/${id}`, {headers : headers}).map(res => res);
    }

    getResult() {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return this.http.get(`${environment.host}/api/result/result`, {headers : headers}).map(res => res);
    }
}
