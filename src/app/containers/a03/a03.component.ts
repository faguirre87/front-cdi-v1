import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A03Model} from './a03.model';

@Component({
  selector: 'app-a03',
  templateUrl: './a03.component.html',
  styleUrls: ['./a03.component.scss']
})
export class A03Component implements OnInit {

  user;
  formA03: A03Model = {
    ambulancia: false,
    auto: false,
    autoPolicia: false,
    avion: false,
    barco: false,
    bicicleta_bici: false,
    camion: false,
    camionDeBomberos: false,
    cochecitoDeBebe: false,
    helicoptero: false,
    micro_colectivo: false,
    moto: false,
    tractor: false,
    tren: false,
    triciclo: false,
    taxi: false
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
    this.surveyService.updateSurvey(this.user.id, "vehiculosDeVerdadYDeJuguete", this.formA03)
        .subscribe(data => {
          location.replace("/a04");
        });
  }

}
