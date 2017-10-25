'use strict';
var msg;
var i=1;
while(i<=10){
    msg = i % 2 ==0 ? "even" : "oneven";
    console.log("%d is %s", i, msg );
}