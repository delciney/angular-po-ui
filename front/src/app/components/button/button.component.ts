import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    const msg = [
      'Você clicou no botão!',
      'A cada clique vai receber uma mensagem aleatória',
      'Ola mundo!',
      'A terra não é plana!',
      'Pizza é muito bom!',
      'Mais uma mensagem aleatória'
    ]
    alert(msg[Math.floor(Math.random() * 5)]);
  }

}
