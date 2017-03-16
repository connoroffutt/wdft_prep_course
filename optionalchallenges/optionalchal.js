
//Exercize 1
var name = "Connor";
console.log('Hello ' + name);

//Exercize 2
var x = 1125;
console.log(1125%2);

//Exercize 3
var a = true;
var b = false;
var c = true;
console.log(a||b||c);

//Exercize 4
var a = true;
var b = false;
var c = true;
console.log(a&&b&&c);

//Exercize 5
var answer1 = 10 - 3 * 5/4 + 202 % 3;   // 10 - 3 * 5/4 + 202 % 3 (javascript runs addition and subtraction first then the multiplication and remainder)
var answer2 = 10 - (3 * 5/4 + (202 % 3)); // 10 - (4.75) = 5.25 
console.log(answer1);
console.log(answer2); 

//Exercize 6 
var num = 12;
var n = num.toString();
console.log(n);

var str = "113";
var s = parseInt(str);
console.log(s);

var flo = "1.12356";
var f = parseFloat(flo);
console.log(f);

var hi = "Hello World";
var hello = parseInt(hi);
console.log(hello); //= "NaN" or "Not-a-Number"

var x = ('34'+5);
console.log(x);
