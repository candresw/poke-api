import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { PokemonApiComponent } from './pokemon-api/pokemon-api.component';

const routes: Routes = [
  {
    path: '',
    component: SaludoComponent,
  },
  {
    path: 'pokes',
    component: PokemonApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
