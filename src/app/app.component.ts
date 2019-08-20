import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arrayExp=[3, 3, 3, 3, 0,
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
  actualFor=20;
  actualDes=20;
  actualCos=20;
  actualSen=20;
  actualSpi=20;
  futureFor=20;
  futureDes=20;
  futureCos=20;
  futureSen=20;
  futureSpi=20;
  exp;

  private calcoloExp(){
    this.exp=0;
    var appAct=this.actualFor-20;
    var appFut=this.futureFor-20;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualDes-20;
    appFut=this.futureDes-20;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualCos-20;
    appFut=this.futureCos-20;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualSen-20;
    appFut=this.futureSen-20;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
    appAct=this.actualSpi-20;
    appFut=this.futureSpi-20;
    while(appAct<appFut){
      this.exp=this.exp+this.arrayExp[appAct];
      appAct++;
    }
  }
}
