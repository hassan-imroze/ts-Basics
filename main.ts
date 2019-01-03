import { Point } from './point'

function doSomething(){
    for(var i=0; i<5;i++){
        console.log(i);
    }
    console.log('finally: '+i);
}

doSomething();

let point = new Point(3,6);
point.x = 10;
point.draw();