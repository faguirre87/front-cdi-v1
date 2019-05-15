import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import "rxjs/Rx";

@Injectable({
    providedIn: "root"
})
export class SurveyService {

    constructor(private http: HttpClient) { }
    get(id) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return this.http.get(`${environment.host}/api/survey/get/${id}`, {headers : headers}).map(res => res);
    }

    createSurvey(id, survey) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http
            .post(`${environment.host}/api/survey/post/${id}`, JSON.stringify(survey), {
                headers: headers
            })
            .map(res => {
                return res;
            });
    }

    updateSurvey(id, nameSurvey, survey) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http
            .post(`${environment.host}/api/survey/update/${nameSurvey}/${id}`, JSON.stringify(survey), {
                headers: headers
            })
            .map(res => {
                return res;
            });
    }

    putSurvey(id, nameSurvey, survey) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http
            .put(`${environment.host}/api/survey/put/${nameSurvey}/${id}`, JSON.stringify(survey), {
                headers: headers
            })
            .map(res => {
                return res;
            });
    }
}
