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
    { label: 'Button Group', value: '/ButtonGroup' },
    { label: 'Calendar', value: '/Calendar' },
    { label: 'Chart', value: '/Chart' },
    { label: 'Checkbox', value: '/Checkbox' },
    { label: 'Checkbox Group', value: '/CheckboxGroup' },
    { label: 'CodeEditor', value: '/CodeEditor' },
    { label: 'Combo', value: '/Combo' },
    { label: 'Container', value: '/Container' },
    { label: 'Datepicker', value: '/Datepicker' },
    { label: 'Datepicker Range', value: '/DatepickerRange' },
    { label: 'Decimal', value: '/Decimal' },
    { label: 'Disclaimer Group', value: '/DisclaimerGroup' },
    { label: 'Divider', value: '/Divider' },
    { label: 'Dropdown', value: '/Dropdown' },
    { label: 'Dynamic Form', value: '/DynamicForm' },
    { label: 'Dynamic View', value: '/DynamicView' },
    { label: 'Email', value: '/Email' },
    { label: 'Gauge', value: '/Gauge' },
    { label: 'Grid', value: '/Grid' },
    { label: 'Info', value: '/Info' },
    { label: 'Input', value: '/Input' },
    { label: 'List View', value: '/ListView' },
    { label: 'Loading Overlay', value: '/LoadingOverlay' },
    { label: 'Login', value: '/Login' },
    { label: 'Lookup', value: '/Lookup' },
    { label: 'Menu', value: '/Menu' },
    { label: 'Menu Panel', value: '/MenuPanel' },
    { label: 'Modal', value: '/Modal' },
    { label: 'Modal Password Recovery', value: '/ModalPasswordRecovery' },
    { label: 'Multi Select', value: '/Multiselect' },
    { label: 'Navbar', value: '/Navbar' },
    { label: 'Number', value: '/Number' },
    { label: 'Page Blocked User', value: '/PageBlockedUser' },
    { label: 'Page Change Password', value: '/PageChangePassword' },
    { label: 'Page Default', value: '/PageDefault' },
    { label: 'Page Detail', value: '/PageDetail' },
    { label: 'Page Dynamic Detail', value: '/PageDynamicDetail' },
    { label: 'Page Dynamic Edit', value: '/PageDynamicEdit' },
    { label: 'Page Dynamic Search', value: '/PageDynamicSearch' },
    { label: 'Page Dynamic Table', value: '/PageDynamicTable' },
    { label: 'Page Edit', value: '/PageEdit' },
    { label: 'Page Job Scheduler', value: '/PageJobScheduler' },
    { label: 'Page List', value: '/PageList' },
    { label: 'Page Login', value: '/PageLogin' },
    { label: 'Page Slide', value: '/PageSlide' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
    // { label: 'Avatar', value: '/Avatar' },
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


