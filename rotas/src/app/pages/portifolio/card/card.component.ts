import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador:Router
    ) {
    //RECUPERAR INFORMAÇÕES DE SUA URL
    //http://localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
      
    )
    
    //Pegando os parametros, porém do componente filho 
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
      
    )
    
    //http://localhost:4200/portifolio/1?{name=caio&token=123}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
      
    )
  }

  ngOnInit(): void {
    //Fazendo que o usúario entre em uma pagina, mas depois de 5s ele vai retornar para a pagina principal
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
