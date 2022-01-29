import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dados = [{ label: 'PO HTML Framework', link: '/MenuPanel', icon: 'po-icon-home' }];
}
