import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = ''; // user - admin - superuser

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'font'];
  }

  ngOnInit(): void {}

  adicionar() {
    this.produtos.push('Caio');
  }

  remova(index: number) {
    //splice serve para remover um element oque vc clicou
    this.produtos.splice(index, 1);
  }
}
