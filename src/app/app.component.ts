import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  actualFor;
  actualDes;
  actualCos;
  actualSen;
  actualSpi;
  exp;

  private calcoloExp(){
    this.exp=this.actualFor;
  }
}
