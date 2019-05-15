import { Component, OnInit } from "@angular/core";
import {A02Model} from "./a02.model";
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';

@Component({
  selector: "app-a02",
  templateUrl: "./a02.component.html",
  styleUrls: ["./a02.component.scss"]
})
export class A02Component implements OnInit {

  user;
  formA02: A02Model = {
    abeja: false,
  animal: false,
  arana: false,
  ardilla: false,
  ballena: false,
  bicho: false,
  burro: false,
  caballo: false,
  cebra: false,
  chancho: false,
  ciervo_bambi: false,
  cocodrilo: false,
  conejo: false,
  cucaracha: false,
  elefante: false,
  foca: false,
  gallina: false,
  gato: false,
  gusano: false,
  hipopotamo: false,
  hormiga: false,
  jirafa: false,
  lechuza: false,
  leon: false,
  lobo: false,
  mariposa: false,
  mono: false,
  mosca: false,
  mosquito: false,
  oso: false,
  oveja: false,
  pajaro: false,
  pato: false,
  pavo: false,
  perro: false,
  pescado_pez: false,
  pinguino: false,
  pollito: false,
  rana: false,
  raton_rata: false,
  sapo: false,
  tigre: false,
  tortuga: false,
  vaca: false,
  vibora: false
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
    this.surveyService.updateSurvey(this.user.id, "animalesDeVerdadYDeJuguete", this.formA02)
        .subscribe(data => {
          location.replace("/a03");
        });
  };

}
