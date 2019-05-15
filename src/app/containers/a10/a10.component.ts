import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A10Model} from './a10.model';

@Component({
  selector: 'app-a10',
  templateUrl: './a10.component.html',
  styleUrls: ['./a10.component.scss']
})
export class A10Component implements OnInit {

  user;
  formA10: A10Model = {
      arbol: false,
      arena: false,
      bandera: false,
      cielo: false,
      cucha: false,
      estrella: false,
      flor: false,
      fuego: false,
      hamaca: false,
      hojas: false,
      humo: false,
      lluvia: false,
      luna: false,
      maceta: false,
      manguera: false,
      nieve: false,
      nube: false,
      pala: false,
      palo: false,
      pasto: false,
      piedra: false,
      piletaNatacion_pile: false,
      planta: false,
      reja: false,
      sol: false,
      techo: false,
      tierra_barro: false,
      timbre: false,
      tobogan: false,
      viento_aire: false,
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
    this.surveyService.updateSurvey(this.user.id, "objetosFueraDeLaCasa", this.formA10)
        .subscribe(data => {
          location.replace("/a11");
        });
  }
}
