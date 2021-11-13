import { Animal } from "./Animal";

export class Gato extends Animal{

    private _pulo: number;
    private _agilidade: number
    
    constructor(nome:string){
        super(nome);
        this._pulo = 60
        this._agilidade = 55
        this._ataque = 70
    

    }

    public fala(): void{
        
        console.log("Este gato mia demais")
    }
}

// ação - metodo
