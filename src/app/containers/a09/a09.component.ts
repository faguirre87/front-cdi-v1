import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A09Model} from './a09.model';

@Component({
  selector: 'app-a09',
  templateUrl: './a09.component.html',
  styleUrls: ['./a09.component.scss']
})
export class A09Component implements OnInit {

  user;
  formA09: A09Model = {
    banco: false,
    banadera: false,
    bano: false,
    biblioteca: false,
    cajon: false,
    cama: false,
    cochera_garage: false,
    cocina: false,
    computadora_compu: false,
    cuna: false,
    ducha: false,
    escaleras: false,
    estufa: false,
    habitacion_pieza: false,
    heladera: false,
    horno: false,
    inodoro: false,
    mesa: false,
    mueble: false,
    patio: false,
    piletaDeLavarManos: false,
    piso: false,
    placard: false,
    puerta: false,
    silla: false,
    sillon: false,
    television_tele: false,
    ventana: false,
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
    this.surveyService.updateSurvey(this.user.id, "mueblesYCuartos", this.formA09)
        .subscribe(data => {
          location.replace("/a10");
        });
  }
}
