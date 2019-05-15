import { Component, OnInit } from "@angular/core";
import { A01Model } from "./a01.model";
import {UserService} from '../../services/user.service';
import {SurveyService} from '../../services/survey.service';

@Component({
  selector: "app-a01",
  templateUrl: "./a01.component.html",
  styleUrls: ["./a01.component.scss"]
})
export class A01Component implements OnInit {
  user;
  formA01: A01Model = {
    am: false,
    ay: false,
    bee_mee: false,
    cuaCua: false,
    guauGuau_baBau: false,
    miau: false,
    muu: false,
    pio_pio: false,
    pum: false,
    qui_qui_ri_qui: false,
    rum_rum: false,
    tu_tu: false
  };
  constructor(private userService: UserService, private surveyService: SurveyService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
        });
  }
  ngOnInit() {}
  updateSurvey() {
    this.surveyService.updateSurvey(this.user.id, "sonidosDeCosasYAnimales", this.formA01)
        .subscribe(data => {
          location.replace("/a02");
        });
  }
}
