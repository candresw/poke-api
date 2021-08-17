import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SinglePoke } from '../models/single-poke';
import { PokesService } from '../services/pokes.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styles: [
  ]
})
export class InformacionComponent implements OnInit, OnChanges {

  @Input() id: string = '';

  pokemon: SinglePoke = new SinglePoke();
  select: boolean = false;

  constructor(

    private PokesSvc: PokesService,

  ) { }

    // Cambia cada vez que el input cambia
    ngOnChanges(changes: SimpleChanges): void {

      this.getPokes( changes[ 'id' ].currentValue )

    }

  ngOnInit(): void {

    this.getPokes(this.id);
    console.log(this.id);

  }

  getPokes(name: string): void {

    if (name != '') {
      
      // Subscribe espera respuesta http
      this.PokesSvc.getId(name).subscribe(res => {
        this.pokemon = res;
        this.select = true;
      })
    }


  }

}
