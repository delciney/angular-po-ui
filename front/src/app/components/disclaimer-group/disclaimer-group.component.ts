import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer-group',
  templateUrl: './disclaimer-group.component.html',
  styleUrls: ['./disclaimer-group.component.scss']
})
export class DisclaimerGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dados = [{ value: 'disclaimer' },{ value: 'teste' }];

}
