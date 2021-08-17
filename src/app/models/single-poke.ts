export class SinglePoke {

    base_experience: number;
    height: [];
    id: number;
    name: string;
    order: number;
    weight: number;
    sprites: Sprites;

    constructor() {

        this.base_experience = 0;
        this.height = [];
        this.id = 0;
        this.name = '';
        this.order = 0;
        this.weight = 0;
        this.sprites = new Sprites;
    }

}

class Sprites {

    front_default: string;
    back_default: string;

    constructor() {

        this.front_default = '';
        this.back_default =  '';

    }


}