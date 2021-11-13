import { Animal } from "./Animal";

export class Rato extends Animal{

    private _velocidade : number;
    private _veneno : number

    constructor(nome:string){
        super(nome)
        this._velocidade = 70
        this._veneno = 40
        this._ataque = 20
    }
    
}