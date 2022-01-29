import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem } from '@po-ui/ng-components';
@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  constructor() { }

  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button: any) {
    alert(`${button.label}`);
  }

  ngOnInit(): void {
  }

}
