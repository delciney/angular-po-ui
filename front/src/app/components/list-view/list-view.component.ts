import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dados = [
    { name: 'Cadastro 1', email: 'nome.sobrenome@po-ui.com' },
    { name: 'Cadastro 2', email: 'n.sobrenome2@po-ui.com' }
  ];
}
