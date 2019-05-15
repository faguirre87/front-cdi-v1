import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A12Model} from './a12.model';

@Component({
  selector: 'app-a12',
  templateUrl: './a12.component.html',
  styleUrls: ['./a12.component.scss']
})
export class A12Component implements OnInit {

  user;
  formA12: A12Model = {
    abuela: false,
    abuelo: false,
    amiga: false,
    amigo: false,
    bebe: false,
    doctor: false,
    familia: false,
    hermana: false,
    hermano: false,
    madrina: false,
    maestra_seno: false,
    mama_mami: false,
    nina_nena: false,
    ninera: false,
    nino_nene: false,
    padrino: false,
    papa_papi: false,
    payaso: false,
    policia: false,
    prima: false,
    primo: false,
    senor: false,
    senora: false,
    tia: false,
    tio: false,
    nombreDelInfante: false,
  };
  constructor(private userService: UserService, private surveyService: SurveyService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
        });
  }
  ngOnInit() {
  }
  updateSurvey() {
    this.surveyService.updateSurvey(this.user.id, "personas", this.formA12)
        .subscribe(data => {
          location.replace("/a13");
        });
  }
}
