import { Component, OnInit } from "@angular/core";
import {ChildrenService} from "../../services/children.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: "app-mostrar-datos",
  templateUrl: "./mostrar-datos.component.html",
  styleUrls: ["./mostrar-datos.component.scss"]
})
export class MostrarDatosComponent implements OnInit {

  user;
  mostrarDatos: any = {
    "name": "",
    "dni": null,
    "birthday": "",
    "age": "",
    "gender": "",
    "birthPlace": "",
    "childrenQuantity": null,
    "familyGroup": "",
    "birthOrder": null,
    "childKeeper": "",
    "anotherChildKeeper": null,
    "kinderGarden": true,
    "kinderGardenSince": "menos de 6 meses",
    "kinderGardenHoursPerDay": 0,
    "kinderGardenHoursPerWeek": 0,
    "languangesContact": false,
    "languanges": null,
    "languangesAge": 0,
    "premature": false,
    "languangeSpeaker": null,
    "gestationWeeks": 40,
    "birthWeight": 0,
    "anyDisease": false,
    "descriptionDisease": null,
    "hearingDisease": false,
    "countHearingDisease": 0,
    "healthProblem": true,
    "descriptionHealthProblem": "fefefefr",
    "educationTutor1": "primary School",
    "ocupationTutor1": "ama de casa",
    "educationTutor2": "primary School",
    "ocupationTutor2": "obrero",
    "birthPlaceTutor1": "Argentina",
    "birthPlaceTutor2": "Argentina",
    "nameTutor1": "sssss",
    "nameTutor2": "aaaa",
    "surveyAnswer": "mama"
  };
  constructor(private childrenService: ChildrenService, private route: ActivatedRoute, private userService: UserService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
          this.childrenService.get(this.user.id)
              .subscribe( result => {
                console.log("MOSTRAR DATOS", result);
                if (result) {
                  this.mostrarDatos = result;
                }
              });
        });
  }

  ngOnInit() {
  }

  sendForm() {
    this.childrenService.create(this.user.id, this.mostrarDatos)
        .subscribe(data => {
          console.log(">>>>>>>>>>>>>>>>", data);
           location.replace("/carga");
        });
  }

}
