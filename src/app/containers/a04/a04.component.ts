import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A04Model} from './a04.model';

@Component({
  selector: 'app-a04',
  templateUrl: './a04.component.html',
  styleUrls: ['./a04.component.scss']
})
export class A04Component implements OnInit {

  user;
  formA04: A04Model = {
    aceituna: false,
    agua: false,
    alfajor: false,
    arroz: false,
    atun: false,
    azucar: false,
    banana: false,
    cafe: false,
    calabaza: false,
    caramelo: false,
    carne: false,
    cereales: false,
    chicle: false,
    choclo: false,
    chocolatada: false,
    chocolate: false,
    chupetin: false,
    coca: false,
    comida_papa: false,
    dulce: false,
    durazno: false,
    empanada: false,
    fideos: false,
    frutilla: false,
    galletita: false,
    hamburguesa_paty: false,
    helado: false,
    hielo: false,
    huevo: false,
    jamon: false,
    jugo: false,
    leche: false,
    lentejas: false,
    licuado: false,
    limonada: false,
    mani: false,
    manteca: false,
    manzana: false,
    mate: false,
    melon: false,
    mermelada: false,
    milanesa: false,
    naranja: false,
    pan: false,
    papasFritas: false,
    papas: false,
    pescado: false,
    pizza: false,
    pochoclo: false,
    pollo: false,
    queso: false,
    sal: false,
    salchicha_pancho: false,
    salsa: false,
    sandia: false,
    soda_gaseosa: false,
    sopa: false,
    te: false,
    tomate: false,
    torta: false,
    tortilla: false,
    uvas: false,
    vainilla: false,
    yogurt: false,
    zanahoria: false,
    zapallo: false,
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
    this.surveyService.updateSurvey(this.user.id, "alimentosYBebidas", this.formA04)
        .subscribe(data => {
          location.replace("/a05");
        });
  }

}
