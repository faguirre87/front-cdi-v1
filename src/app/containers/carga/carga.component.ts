import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ChildrenService} from "../../services/children.service";
import {SurveyService} from '../../services/survey.service';
import {CargaModel} from './carga.model';


@Component({
  selector: "app-carga",
  templateUrl: "./carga.component.html",
  styleUrls: ["./carga.component.scss"]
})
export class CargaComponent implements OnInit {
  
  user;
  datos: CargaModel = {
    "name": "",
    "dni": null,
    "gender": "",
    "birthday": "",
    "age": null,
  };

  constructor(private userService: UserService, private surveyService: SurveyService) {
   
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
          this.surveyService.get(this.user.id)
              .subscribe( (result: any) => {
                if (result) {
                  this.datos = result;
                }
              });
        });
        
  }

  ngOnInit() {
  }
  postDatos() {
    this.surveyService.createSurvey(this.user.id, this.datos)
    .subscribe(data => {
        location.replace("/a01");
    });
  }

}
