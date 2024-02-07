import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css'],
})
export class ListNewComponent implements OnInit {
  //Propriedades
  item: string = '';
  lista: string[] = [];

  
  isEnableBlock: boolean = false;
  constructor() {}

  //Metodos
  ngOnInit(): void {}

  adicionarLista() {
    this.lista.push(this.item);
    this.isEnableBlock = true;
    this.item = '';
  }

  removerItem() {
    this.lista.pop();
    if (this.lista.length === 0) {
      this.isEnableBlock = false;
    }
  }
}
