import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokesService } from '../services/pokes.service';
import { requesContainer } from '../models/requestContainer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  request: requesContainer = new requesContainer();

  actualPage: number = 1;

  // Instanciamos variable de poke con el eventEmitter
  @Output()selectedPoke = new EventEmitter<string>(); 

  constructor(
    private PokesSvc: PokesService,

  ) { }

  ngOnInit(): void {

    this.getPokes(1);

  }

  getPokes( page: number ): void {

    let offset: number = (page - 1) * 10;
    let params: HttpParams = new HttpParams().append('limit', '10').append('offset', offset.toString());

    this.PokesSvc.get(params).subscribe(res => {
      this.request = res;
      this.actualPage = page;
    });

    

  }

  //Emite el nombre
  pickPoke( nombre: string ): void {

    this.selectedPoke.emit( nombre );
    
  }

}
