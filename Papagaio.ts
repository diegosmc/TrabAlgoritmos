import { Animal } from "./Animal";

export class Papagaio extends Animal{

    private _ofende : number;
    private _fuga: number

    constructor(nome:string){
        super(nome)
        this._ofende = 100
        this._fuga = 35
        this._ataque = 40
    }
}