import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arrayExp=[2, 2, 2, 0, //16-20
            3, 3, 3, 3, 0, //21-25
            3, 4, 4, 4, 0, //26-30
            5, 5, 5, 5, 0, //31-35
            5, 6, 6, 6, 0, //36-40
            7, 7, 7, 7, 0, //41-45
            8, 8, 8, 8, 0, //46-50
            10, 10, 10, 10, 0, //51-55
            11, 11, 11, 11, 0, //56-60
            13, 13, 14, 14, 0, //61-65
            14, 14, 14, 15, 0, //66-70
            17, 17, 18, 18, 0, //71-75
            18, 19, 19, 19, 0, //76-80
            22, 23, 23, 23, 0, //81-85
            24, 24, 24, 25, 0, //86-90
            30, 30, 30, 31, 0, //91-95
            31, 32, 32, 32, 0, //96-100
            40, 40, 40, 41, 0, //101-105
            42, 42, 42, 43, 0, //106-110
            55, 55, 56, 56, 0, //111-115
            57, 58, 58, 59, 0, //116-120
            60, 60, 61, 61, 0, //121-125
            62, 63, 63, 64, 0, //126-130
            65, 65, 66, 66, 0, //131-135
            67, 68, 68, 69, 0];
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

  actualAmbizione=Math.round((this.actualSpi+this.actualSpi+this.actualSen+this.actualCos)/4);
  actualVelocita=Math.round((this.actualFor+this.actualFor+this.actualDes+this.actualDes+this.actualDes+this.actualCos)/10);
  actualPortata=Math.round((this.actualFor+this.actualDes+this.actualSen)/15);
  actualApnea=Math.round((this.actualCos)/8);
  actualSollevamento=Math.round(((this.actualFor*this.actualFor*this.actualCos)/(this.actualFor+(this.actualCos/2))/3));
  actualSalto=Math.round((this.actualFor+this.actualDes)/12);
  actualCaduta=Math.round((this.actualFor+this.actualCos)/6);
  actualVita=Math.round(100+(((this.actualFor+this.actualDes+this.actualCos+this.actualSen+this.actualSpi)/5)+((this.actualFor+this.actualCos)*1.25)/2)/2);
  actualEnergia=Math.round(100+(((this.actualFor+this.actualDes+this.actualCos+this.actualSen+this.actualSpi)/5)+((this.actualDes+this.actualSen+this.actualSpi)*1.25)/3)/2);

  futureAmbizione=Math.round((this.futureSpi+this.futureSpi+this.futureSen+this.futureCos)/4);
  futureVelocita=Math.round((this.futureFor+this.futureFor+this.futureDes+this.futureDes+this.futureDes                                   +this.futureCos)/10);
  futurePortata=Math.round((this.futureFor+this.futureDes+this.futureSen)/15);
  futureApnea=Math.round((this.futureCos)/8);
  futureSollevamento=Math.round(((this.futureFor*this.futureFor*this.futureCos)/(this.futureFor+                                  (this.futureCos/2))/3));
  futureSalto=Math.round((this.futureFor+this.futureDes)/12);
  futureCaduta=Math.round((this.futureFor+this.futureCos)/6);
  futureVita=Math.round(100+(((this.futureFor+this.futureDes+this.futureCos+this.futureSen+this.futureSpi)/5)+((this.futureFor+this.futureCos)*1.25)/2)/2);
  futureEnergia=Math.round(100+(((this.futureFor+this.futureDes+this.futureCos+this.futureSen+this.futureSpi)/5)+((this.futureDes+this.futureSen+this.futureSpi)*1.25)/3)/2);

  private calcoloSec(){
      this.actualAmbizione=Math.round((this.actualSpi+this.actualSpi+this.actualSen+this.actualCos)/4);
      this.actualVelocita=Math.round((this.actualFor+this.actualFor+this.actualDes+this.actualDes                                  +this.actualDes+this.actualCos)/10);
      this.actualPortata=Math.round((this.actualFor+this.actualDes+this.actualSen)/15);
      this.actualApnea=Math.round((this.actualCos)/8);
      this.actualSollevamento=Math.round(((this.actualFor*this.actualFor*this.actualCos)/(this.actualFor+                               (this.actualCos/2))/3));
      this.actualSalto=Math.round((this.actualFor+this.actualDes)/12);
      this.actualCaduta=Math.round((this.actualFor+this.actualCos)/6);
      this.actualVita=Math.round(100+(((this.actualFor+this.actualDes+this.actualCos+this.actualSen+this.actualSpi)/5)+((this.actualFor+this.actualCos)*1.25)/2)/2);
      this.actualEnergia=Math.round(100+(((this.actualFor+this.actualDes+this.actualCos+this.actualSen+this.actualSpi)/5)+((this.actualDes+this.actualSen+this.actualSpi)*1.25)/3)/2);
  }

  private calcoloSecFut(){
      this.futureAmbizione=Math.round((this.futureSpi+this.futureSpi+this.futureSen+this.futureCos)/4);
      this.futureVelocita=Math.round((this.futureFor+this.futureFor+this.futureDes+this.futureDes                                  +this.futureDes+this.futureCos)/10);
      this.futurePortata=Math.round((this.futureFor+this.futureDes+this.futureSen)/15);
      this.futureApnea=Math.round((this.futureCos)/8);
      this.futureSollevamento=Math.round(((this.futureFor*this.futureFor*this.futureCos)/(this.futureFor+                               (this.futureCos/2))/3));
      this.futureSalto=Math.round((this.futureFor+this.futureDes)/12);
      this.futureCaduta=Math.round((this.futureFor+this.futureCos)/6);
      this.futureVita=Math.round(100+(((this.futureFor+this.futureDes+this.futureCos+this.futureSen+this.futureSpi)/5)+((this.futureFor+this.futureCos)*1.25)/2)/2);
      this.futureEnergia=Math.round(100+(((this.futureFor+this.futureDes+this.futureCos+this.futureSen+this.futureSpi)/5)+((this.futureDes+this.futureSen+this.futureSpi)*1.25)/3)/2);
  }

  private calcoloExp(){
    this.exp=0; //test
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
