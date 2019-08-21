import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arrayExp=[2, 2, 2, 0,
            3, 3, 3, 3, 0,
            3, 4, 4, 4, 0,
            5, 5, 5, 5, 0,
            5, 6, 6, 6, 0,
            7, 7, 7, 7, 0,
            8, 8, 8, 8, 0,
            10, 10, 10, 10, 0,
            11, 11, 11, 11, 0,
            13, 13, 14, 14, 0,
            14, 14, 14, 15, 0,
            17, 17, 18, 18, 0,
            18, 19, 19, 19, 0,
            22, 23, 23, 23, 0,
            24, 24, 24, 25, 0,
            30, 30, 30, 31, 0,
            31, 32, 32, 32, 0];
  start=16;
  actualFor=this.start;
  actualDes=this.start;
  actualCos=this.start;
  actualSen=this.start;
  actualSpi=this.start;
  futureFor=this.start;
  futureDes=this.start;
  futureCos=this.start;
  futureSen=this.start;
  futureSpi=this.start;
  exp;

  private calcoloExp(){
    this.exp=0;
    var appAct=this.actualFor-this.start;
    var appFut=this.futureFor-this.start;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualDes-this.start;
    appFut=this.futureDes-this.start;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualCos-this.start;
    appFut=this.futureCos-this.start;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualSen-this.start;
    appFut=this.futureSen-this.start;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualSpi-this.start;
    appFut=this.futureSpi-this.start;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
  }
}
