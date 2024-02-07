import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
		OnDestroy
{
	quantidade: number = 0;

	constructor() {}

	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}

	//IMPORTANTE: checked -> content -> view

	//quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	//depois da inicialização da view
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	//após alguma alteração, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	//após alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}
	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	ngOnInit(): void {
		console.log('ngDoInit');
	}

	ngOnDestroy(): void {
		console.log('GOODBYE MY FRIEND');
		
	}
}
