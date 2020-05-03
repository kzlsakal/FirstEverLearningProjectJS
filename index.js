// comment

// this is the same as print
console.log('hello world');

//you can throw random values in the code, it does not break the compiler.
"a string";
2321;

// define var using = sign 
// order is important like in Phython
var myprint = "another string";
var myprint2 = " and another";
console.log(myprint + myprint2);

// math
console.log(4*2);

// if both conditions are true
console.log(true && true);
console.log(true && false);

// if one of the conditions is true
console.log(true || false);
console.log(false || false);

// check if equal with ===
console.log(870 === 870);
console.log(870 === 875);
console.log('red' === 'red');
console.log('red' === 'yellow');

// variables

var a = 45;
var b = 45;
var c = 15

// if statements

if (b === a) {
console.log('I am equal');
}
if (c < a) {
console.log('I am smaller');
}

// while loops

while (c < a) {
  console.log (c);
  if (c === a - 1) {
    console.log ("Almost there!")
  }
  c += 1;
}
console.log(c);
console.log("Finish!")

// for loops

// for (c)


// functions

function add (num1, num2) {
return num1 +  num2;
}

// calling functions

var total = "Your total is: " + add(b, c);
console.log(total);