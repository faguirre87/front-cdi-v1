import { Component, OnInit } from '@angular/core';
import {A01Model} from '../a01/a01.model';
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';
import {A13Model} from './a13.model';

@Component({
  selector: 'app-a13',
  templateUrl: './a13.component.html',
  styleUrls: ['./a13.component.scss']
})
export class A13Component implements OnInit {

  user;
  formA13: A13Model = {
    aVer_aPasear: false,
    adios_chau: false,
    ahiVoy: false,
    alAguaPatos: false,
    arribaLasManos: false,
    basta: false,
    besitos: false,
    buenasNoches: false,
    buenosDias: false,
    chasChas: false,
    cosquillita: false,
    cuco_acaEsta: false,
    dale: false,
    gol: false,
    gracias: false,
    hola: false,
    ojitos: false,
    perdon: false,
    pis: false,
    porFavor_porfi: false,
    pumba: false,
    queLindaManita: false,
    salud_chinChin: false,
    shhh: false,
    siesta_noniNoni: false,
    tortitas: false,
    unoDosTres: false,
    upa: false,
    vamos: false,
    vivaViva: false,
    yaEsta_listo: false,
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
    this.surveyService.updateSurvey(this.user.id, "rutinasReglasSocialesYJuegos", this.formA13)
        .subscribe(data => {
          location.replace("/a14");
        });
  }
}
