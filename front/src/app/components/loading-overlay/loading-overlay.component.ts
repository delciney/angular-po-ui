import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  constructor() { }
  
  public mostrar: Boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrar = false;
    }, 3000);
  }

}
