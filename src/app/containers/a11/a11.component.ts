import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A11Model} from './a11.model';

@Component({
  selector: 'app-a11',
  templateUrl: './a11.component.html',
  styleUrls: ['./a11.component.scss']
})
export class A11Component implements OnInit {

  user;
  formA11: A11Model = {
    banco: false,
    bosque: false,
    calesita: false,
    calle: false,
    campo: false,
    casa: false,
    cerro_montana: false,
    circo: false,
    cumpleanos_cumple: false,
    escuela_cole: false,
    fiesta: false,
    hospital_clinica: false,
    iglesia_templo: false,
    jardin: false,
    mar: false,
    pelotero: false,
    playa: false,
    plaza: false,
    rio: false,
    supermercado_super: false,
    vereda: false,
    zoologico: false,
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
    this.surveyService.updateSurvey(this.user.id, "lugaresFueraDeLaCasa", this.formA11)
        .subscribe(data => {
          location.replace("/a12");
        });
  }
}
