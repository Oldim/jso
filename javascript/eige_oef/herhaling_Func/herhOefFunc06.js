'use strict';

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 1){
      temp = a;
      a = a + b;
      b = temp;
      num--;
      //console.log(b);
    }
  
    return b;
    
  }
  var result= fibonacci(10);
console.log(result);