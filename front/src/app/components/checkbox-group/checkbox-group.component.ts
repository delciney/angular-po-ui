import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dados = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ];

}
