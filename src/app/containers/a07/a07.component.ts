import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A07Model} from './a07.model';

@Component({
  selector: 'app-a07',
  templateUrl: './a07.component.html',
  styleUrls: ['./a07.component.scss']
})
export class A07Component implements OnInit {

  user;
  formA07: A07Model = {
    birome_lapicera: false,
    bolitas: false,
    crayones: false,
    cubos: false,
    fibras: false,
    globo: false,
    hoja_papel: false,
    juguete_chiche: false,
    lapiz: false,
    libro_cuento: false,
    muneca: false,
    osito: false,
    patines: false,
    pelicula_peli: false,
    pelota: false,
    peluche: false,
    pinturitas: false,
    plastilina: false,
    tambor: false,
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
    this.surveyService.updateSurvey(this.user.id, "juguetes", this.formA07)
        .subscribe(data => {
          location.replace("/a08");
        });
  }
}
