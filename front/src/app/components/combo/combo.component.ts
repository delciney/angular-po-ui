import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dados = [{ value: 'Option 1' }, { value: 'Option 2' }];

}
