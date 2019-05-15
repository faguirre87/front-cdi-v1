import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A18Model} from './a18.model';

@Component({
  selector: 'app-a18',
  templateUrl: './a18.component.html',
  styleUrls: ['./a18.component.scss']
})
export class A18Component implements OnInit {

  user;
  formA18: A18Model = {
    aquel: false,
    aquellos: false,
    aquella: false,
    aquellas: false,
    el: false,
    ellos: false,
    ella: false,
    ellas: false,
    esa: false,
    esas: false,
    ese: false,
    eso: false,
    esos: false,
    esta: false,
    estas: false,
    este: false,
    esto: false,
    estos: false,
    le: false,
    les: false,
    lo: false,
    me: false,
    mi: false,
    mia: false,
    mias: false,
    mio: false,
    mios: false,
    nosotros: false,
    nuestro: false,
    se: false,
    su: false,
    suya: false,
    suyas: false,
    suyo: false,
    suyos: false,
    te: false,
    tu: false,
    tuya: false,
    tuyas: false,
    tuyo: false,
    tuyos: false,
    vos: false,
    yo: false,
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
    this.surveyService.updateSurvey(this.user.id, "pronombresYModificadores", this.formA18)
        .subscribe(data => {
          location.replace("/a19");
        });
  }
}
