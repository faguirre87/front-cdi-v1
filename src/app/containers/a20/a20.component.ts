import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A20Model} from './a20.model';

@Component({
  selector: 'app-a20',
  templateUrl: './a20.component.html',
  styleUrls: ['./a20.component.scss']
})
export class A20Component implements OnInit {

  user;
  formA20: A20Model = {
    a_al: false,
    con: false,
    de_del: false,
    el: false,
    en: false,
    entre: false,
    la: false,
    las: false,
    los: false,
    para: false,
    pero: false,
    un: false,
    una: false,
    unas: false,
    unos: false,
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
    this.surveyService.updateSurvey(this.user.id, "preposicionesYArticulos", this.formA20)
        .subscribe(data => {
          location.replace("/a21");
        });
  }
}
