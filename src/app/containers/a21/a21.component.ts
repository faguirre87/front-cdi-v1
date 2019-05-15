import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A21Model} from './a21.model';

@Component({
  selector: 'app-a21',
  templateUrl: './a21.component.html',
  styleUrls: ['./a21.component.scss']
})
export class A21Component implements OnInit {

  user;
  formA21: A21Model = {
    asi: false,
    bien: false,
    despacio: false,
    mal: false,
    mas: false,
    mucho: false,
    nada: false,
    no: false,
    noHay: false,
    otro_otraVez: false,
    poco_poquito: false,
    rapido: false,
    si: false,
    todavia: false,
    todo: false,
    ya: false,
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
    this.surveyService.updateSurvey(this.user.id, "cuantificadoresYAdverbios", this.formA21)
        .subscribe(data => {
          location.replace("/a22");
        });
  }
}
