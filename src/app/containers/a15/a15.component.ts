import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A15Model} from './a15.model';

@Component({
  selector: 'app-a15',
  templateUrl: './a15.component.html',
  styleUrls: ['./a15.component.scss']
})
export class A15Component implements OnInit {

  user;
  formA15: A15Model = {
    estar: false,
    haber_hay: false,
    ser: false,
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
    this.surveyService.updateSurvey(this.user.id, "estados", this.formA15)
        .subscribe(data => {
          location.replace("/a16");
        });
  }
}
