import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A06Model} from './a06.model';

@Component({
  selector: 'app-a06',
  templateUrl: './a06.component.html',
  styleUrls: ['./a06.component.scss']
})
export class A06Component implements OnInit {

  user;
  formA06: A06Model = {
    barba: false,
    bigote: false,
    boca: false,
    brazo: false,
    cabeza: false,
    cachete: false,
    cara: false,
    cola_culo: false,
    dedo: false,
    dientes: false,
    garganta_cuello: false,
    hombro: false,
    labios: false,
    lengua: false,
    mano: false,
    nariz: false,
    ojos: false,
    ombligo_pupo: false,
    oreja: false,
    panza: false,
    pecho_teta: false,
    pelo: false,
    pene_pito: false,
    piernas: false,
    pies_patas: false,
    rodilla: false,
    unas: false,
    vagina: false,
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
    this.surveyService.updateSurvey(this.user.id, "partesDelCuerpo", this.formA06)
        .subscribe(data => {
          location.replace("/a07");
        });
  }
}
