import { Component, OnInit } from '@angular/core';
import { PoGaugeRanges } from '@po-ui/ng-components';
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dado = 25;
  turnoverRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
    { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'High rate', color: '#c64840' }
  ];
}
