import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styles: [
  ]
})
export class PokemonApiComponent implements OnInit {

  nombre: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  imrpimir( nombre: string ): void {

    console.log(nombre);

  }

}
