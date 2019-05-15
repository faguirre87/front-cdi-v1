import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A19Model} from './a19.model';

@Component({
  selector: 'app-a19',
  templateUrl: './a19.component.html',
  styleUrls: ['./a19.component.scss']
})
export class A19Component implements OnInit {

  user;
  formA19: A19Model = {
    como: false,
    cual: false,
    cuando: false,
    donde: false,
    porQue: false,
    que: false,
    quien: false,
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
    this.surveyService.updateSurvey(this.user.id, "preguntas", this.formA19)
        .subscribe(data => {
          location.replace("/a20");
        });
  }
}
