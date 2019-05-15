import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ResultService} from '../../services/resultado.service';

@Component({
  selector: 'app-resultado-padre',
  templateUrl: './resultado-padre.component.html',
  styleUrls: ['./resultado-padre.component.scss']
})
export class ResultadoPadreComponent implements OnInit {

  user;
  result;
  constructor(private userService: UserService, private resultService: ResultService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
          this.resultService.getResultPadre(this.user.id)
              .subscribe(result => {
                  console.log("RESULTADO PADRE", result);
                  this.result = result;
              });
        });
  }

  ngOnInit() {}


}
