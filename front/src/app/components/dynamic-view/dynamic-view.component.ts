import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-view',
  templateUrl: './dynamic-view.component.html',
  styleUrls: ['./dynamic-view.component.scss']
})
export class DynamicViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public fields = [{ property: 'nome' }, { property: 'sobrenome' }];
  public values = { nome: 'Delciney', sobrenome: 'Lemos Oliveira' };
}
