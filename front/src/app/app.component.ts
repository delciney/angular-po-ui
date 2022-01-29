import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  public mostrarHome: Boolean = false;
  public rota: String = "";

  public voltar(){
    window.location.pathname = "/";
  }

  public definirRota(event: any){
    this.rota = event;
  }

  public navegar(){
    if(this.rota !== "")
      window.location.pathname = this.rota.toString();
    else
      alert("Selecione uma componente para avançar!");
  }
  public rotas = [
    { label: 'Accordion', value: '/Accordion' },
    { label: 'Avatar', value: '/Avatar' },
    { label: 'Breadcrumb', value: '/Breadcrumb' },
    { label: 'Button', value: '/Button' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' }

  ];

  constructor() {
    if(window.location.pathname == "/" || window.location.pathname == undefined){
    this.mostrarHome = true;
    }else{
    this.mostrarHome = false;
    }
  }
}


