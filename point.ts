export class Point{
    private _x: number;
    private _y: number;
    
    constructor(x?:number,y?:number){
        this._x = x;
        this._y = y;
    } 

    draw(){
        console.log('X: '+this._x+' ,Y: '+ this._y);
    }

    get x(){
        return this._x;
    }
    
    set x(value){
        this._x = value;
    }
}

