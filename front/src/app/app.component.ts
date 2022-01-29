import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  public mostrarHome: Boolean = false;

  public voltar(){
    window.location.pathname = "/";
  }

  public iniciar(){
    window.location.pathname = "/Accordion";
  }

  constructor() {
    if(window.location.pathname == "/" || window.location.pathname == undefined){
    this.mostrarHome = true;
    }else{
    this.mostrarHome = false;
    }
  }
}


