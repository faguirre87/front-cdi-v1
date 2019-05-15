import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A16Model} from './a16.model';

@Component({
  selector: 'app-a16',
  templateUrl: './a16.component.html',
  styleUrls: ['./a16.component.scss']
})
export class A16Component implements OnInit {

  user;
  formA16: A16Model = {
    alto: false,
    amarillo: false,
    asco_asqueroso: false,
    azul: false,
    blanco: false,
    bueno: false,
    caca_popo: false,
    caliente: false,
    cansado: false,
    chico_chiquitito: false,
    despierto: false,
    diferente_distinto: false,
    dificil: false,
    duro: false,
    enfermo: false,
    enojado: false,
    feliz: false,
    feo: false,
    frio: false,
    fuerte: false,
    gordo: false,
    grande: false,
    hambre: false,
    igual: false,
    largo: false,
    lento: false,
    limpio: false,
    lindo: false,
    loco: false,
    lleno: false,
    malo: false,
    mejor: false,
    mentiroso: false,
    miedo_susto: false,
    mojado: false,
    mugriento: false,
    negro: false,
    nuevo: false,
    oscuro: false,
    peligroso: false,
    pesado: false,
    pobre: false,
    primero: false,
    rapido: false,
    rico: false,
    rojo: false,
    rosa: false,
    roto: false,
    ruidoso: false,
    seco: false,
    solo: false,
    suave: false,
    sucio: false,
    tonto_bobo: false,
    tranquilo: false,
    triste: false,
    ultimo: false,
    vacio: false,
    verde: false,
    viejo: false,
    violeta: false,
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
    this.surveyService.updateSurvey(this.user.id, "cualidadesYAtributos", this.formA16)
        .subscribe(data => {
          location.replace("/a17");
        });
  }
}
