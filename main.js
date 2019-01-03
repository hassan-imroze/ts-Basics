"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally: ' + i);
}
doSomething();
var point = new point_1.Point(3, 6);
point.x = 10;
point.draw();
