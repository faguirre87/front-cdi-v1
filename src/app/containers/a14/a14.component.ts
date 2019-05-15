import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A14Model} from './a14.model';

@Component({
  selector: 'app-a14',
  templateUrl: './a14.component.html',
  styleUrls: ['./a14.component.scss']
})
export class A14Component implements OnInit {

  user;
  formA14: A14Model = {
    abrir: false,
    acabar: false,
    acompanar: false,
    acostar: false,
    agarrar: false,
    almorzar: false,
    andar: false,
    apagar: false,
    apurar: false,
    arreglar: false,
    asustar: false,
    atar: false,
    ayudar: false,
    bailar: false,
    bajar: false,
    banar: false,
    barrer: false,
    besar: false,
    buscar: false,
    caer: false,
    callar: false,
    caminar: false,
    cantar: false,
    cenar: false,
    cerrar: false,
    chupar: false,
    cocinar: false,
    comer: false,
    comprar: false,
    correr: false,
    cortar: false,
    dar: false,
    decir: false,
    dejar: false,
    desayunar: false,
    dibujar: false,
    doler: false,
    dormir: false,
    empujar: false,
    encontrar: false,
    ensenar: false,
    entrar: false,
    equivocar: false,
    esconder: false,
    escribir: false,
    escuchar: false,
    esperar: false,
    ganar: false,
    gritar: false,
    guardar: false,
    gustar: false,
    hablar: false,
    hacer: false,
    hamacar: false,
    ir: false,
    jugar: false,
    juntar: false,
    lastimar: false,
    lavar: false,
    leer: false,
    levantarse: false,
    llevar: false,
    llorar: false,
    meter: false,
    mirar: false,
    morder: false,
    mostrar: false,
    mover: false,
    nadar: false,
    oir: false,
    parar: false,
    patear: false,
    patinar: false,
    pegar: false,
    peinar: false,
    pensar: false,
    perder: false,
    pintar: false,
    poder: false,
    poner: false,
    prender: false,
    prestar: false,
    quedarse: false,
    quemarse: false,
    querer: false,
    quitar: false,
    regalar: false,
    respirar: false,
    romper: false,
    saber: false,
    sacar: false,
    salir: false,
    saltar: false,
    saludar: false,
    sentar: false,
    soplar: false,
    subir: false,
    tapar: false,
    tener: false,
    terminar: false,
    tirar: false,
    tocar: false,
    tomar: false,
    traer: false,
    venir: false,
    ver: false,
    volar: false,
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
    this.surveyService.updateSurvey(this.user.id, "accionesYProcesos", this.formA14)
        .subscribe(data => {
          location.replace("/a15");
        });
  }
}
