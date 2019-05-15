import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A22Model} from './a22.model';

@Component({
  selector: 'app-a22',
  templateUrl: './a22.component.html',
  styleUrls: ['./a22.component.scss']
})
export class A22Component implements OnInit {

  user;
  formA22: A22Model = {
    abajo: false,
    aca: false,
    adelante: false,
    adentro: false,
    afuera: false,
    ahi: false,
    alLado: false,
    alla: false,
    aqui: false,
    arriba: false,
    atras: false,
    cerca: false,
    enfrente: false,
    lejos: false,
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
    this.surveyService.updateSurvey(this.user.id, "locativos", this.formA22)
        .subscribe(data => {
          location.replace("/a23");
        });
  }
}
