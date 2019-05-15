import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A05Model} from './a05.model';

@Component({
  selector: 'app-a05',
  templateUrl: './a05.component.html',
  styleUrls: ['./a05.component.scss']
})
export class A05Component implements OnInit {

  user;
  formA05: A05Model = {
    anteojos_lentes: false,
    aros: false,
    babero: false,
    bombacha: false,
    botas: false,
    boton: false,
    bufanda: false,
    buzo: false,
    calzoncillo: false,
    camisa: false,
    campera: false,
    cartera: false,
    cierre: false,
    collar: false,
    gorra_gorro: false,
    guantes: false,
    hebilla_gomita: false,
    malla: false,
    medias: false,
    mochila: false,
    ojotas: false,
    pantalon: false,
    panal: false,
    pijama: false,
    polera: false,
    pullover: false,
    remera: false,
    ropa: false,
    saco: false,
    shorts: false,
    sombrero: false,
    vestido: false,
    zapatilla: false,
    zapato: false,
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
    this.surveyService.updateSurvey(this.user.id, "ropaYAccesorios", this.formA05)
        .subscribe(data => {
          location.replace("/a06");
        });
  }

}
