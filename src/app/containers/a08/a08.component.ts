import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A08Model} from './a08.model';

@Component({
  selector: 'app-a08',
  templateUrl: './a08.component.html',
  styleUrls: ['./a08.component.scss']
})
export class A08Component implements OnInit {

  user;
  formA08: A08Model = {
    alfombra: false,
    almohada: false,
    balde: false,
    basura: false,
    bolsa_bolsita: false,
    botella: false,
    caja: false,
    camara: false,
    canasta: false,
    celular_celu: false,
    cepillo: false,
    cepilloDeDientes: false,
    champu: false,
    chupete: false,
    cigarrillos_puchos: false,
    clavos: false,
    cuadro: false,
    cuchara: false,
    cuchillo: false,
    diario: false,
    dinero_plata: false,
    escoba: false,
    espejo: false,
    fosforo: false,
    fotos: false,
    frazada: false,
    jabon: false,
    lampara: false,
    llave: false,
    luz: false,
    mamadera_meme: false,
    martillo: false,
    olla: false,
    panuelo: false,
    papel: false,
    pastaDeDientes: false,
    peine: false,
    pelela: false,
    plancha: false,
    plato: false,
    reloj: false,
    remedio: false,
    servilleta: false,
    tachoDeBasura: false,
    taza: false,
    telefono: false,
    tenedor: false,
    tijeras: false,
    toalla: false,
    trapo: false,
    vaso: false,
    vela: false,
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
    this.surveyService.updateSurvey(this.user.id, "utensillosDeLaCasa", this.formA08)
        .subscribe(data => {
          location.replace("/a09");
        });
  }
}
