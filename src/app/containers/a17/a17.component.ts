import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A17Model} from './a17.model';

@Component({
  selector: 'app-a17',
  templateUrl: './a17.component.html',
  styleUrls: ['./a17.component.scss']
})
export class A17Component implements OnInit {

  user;
  formA17: A17Model = {
    aLaManana: false,
    aLaNoche: false,
    aLaTarde: false,
    ahora: false,
    anos: false,
    ayer: false,
    despues: false,
    dia: false,
    hoy: false,
    manana: false,
    noche: false,
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
    this.surveyService.updateSurvey(this.user.id, "palabrasSobreElTiempo", this.formA17)
        .subscribe(data => {
          location.replace("/a18");
        });
  }
}
