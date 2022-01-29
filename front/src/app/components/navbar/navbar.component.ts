import { Component, OnInit } from '@angular/core';
import {PoNavbarIconAction, PoNavbarItem } from '@po-ui/ng-components';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public actions: Array<PoNavbarIconAction> = [{
    label: 'teste',
    icon: 'po-icon-news'
  }];

  public items: Array<PoNavbarItem> = [{
    label: 'teste',
    action: ()=>{},
  }];

  public literals = "/";
}
