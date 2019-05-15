import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ResultService} from '../../services/resultado.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  user;
  items;
  constructor(private userService: UserService, private resultService: ResultService) {
    this.userService.getUser()
        .subscribe(data => {
          this.user = data;
          this.resultService.getResult()
              .subscribe(result => {
                console.log("RESULTADO PADRE", result);
                this.items = result;
              });
        });
  }

  ngOnInit() {
  }


}
