import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A23Model} from './a23.model';

@Component({
  selector: 'app-a23',
  templateUrl: './a23.component.html',
  styleUrls: ['./a23.component.scss']
})
export class A23Component implements OnInit {

  user;
  formA23: A23Model = {
    entonces: false,
    o: false,
    porque: false,
    que: false,
    si: false,
    sino: false,
    tambien: false,
    y: false,
  };
  constructor(private userService: UserService, private surveyService: SurveyService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
        });
  }
  ngOnInit() {
  }
  putSurvey() {
    this.surveyService.putSurvey(this.user.id, "conectivos", this.formA23)
        .subscribe(data => {
          location.replace("/resultado-padre");
        });
  }
}
