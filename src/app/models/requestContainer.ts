import { Pokemon } from './pokemon';
export class requesContainer {

    constructor(){
        this.count = 1;
        this.next = '';
        this.previous = '';
        this.results = [];
    }

    count:	number;
    next: string;
    previous: string;
    results: Pokemon[];

}