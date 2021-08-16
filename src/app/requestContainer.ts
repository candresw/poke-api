import { Pokemon } from './pokemon';
export interface requesContainer {

    count:	number;
    next: string;
    previous: string;
    results: Pokemon[];

}