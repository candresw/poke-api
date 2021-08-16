import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Pokemon } from '../pokemon';
import { requesContainer } from '../requestContainer';

@Injectable({
  providedIn: 'root'
})
export class PokesService {

  url: string = environment.urlPokes + 'pokemon'

  constructor( private http: HttpClient ) { }

    get(params: HttpParams): Observable<requesContainer> {
      return this.http.get<requesContainer>(this.url, { params });
    }

    post( req: requesContainer ): Observable<requesContainer> {
      return this.http.post<requesContainer>(this.url, req);
    }

    getId( id: number ): Observable<Pokemon> {
      return this.http.get<Pokemon>(`${ this.url } / ${ id }`);
    }
}

