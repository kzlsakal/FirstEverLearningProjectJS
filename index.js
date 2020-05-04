// comment

/* multi-line
   comment
*/

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
if (c > a) {
console.log('I am bigger');
}
else if (c < a) {
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
console.log("Finish!");

// for loops

// for (c)


// functions

function add (num1, num2) {
return num1 +  num2;
}

// calling functions

var total = "Your total is: " + add(b, c);
console.log(total);

// numbers
// integer, float and max

var max1 = +Infinity;
var max2 = -Infinity;

console.log(max1);
console.log(max2);

// modulo

var numToMod = 5;
var mod1 = 2
console.log(numToMod % mod1); // should return the remainder 1

// strings

var string1 = 'Hooray!';

var firstChar1 = string1[0]; // will return the first character
var thirdChar1 = string1[3]; // will return the fourth character

console.log(firstChar1 + thirdChar1); // will return Hr
console.log(firstChar1, thirdChar1); // will separate them by space and return H r

function returnString(string, index) {
  return string[index];
}

var stringChop = returnString(string1, 4);
console.log(stringChop);

// arrays
var array1 = ['some string', 'some other string', 'and another string'];
console.log(array1[2]);

// ocjects - dictionaries

var dict1 = {
  'first': 'first string',
  'second': 'second string',
  'third': 'third string'
}

console.log(dict1['second']);
console.log(dict1.third);

// objects with functions

function returnValue(object, key){
  return object[key]; // this has to be bracket type because .key will look for the 'key entry' instead of calling the variable
}
var key1 = 'first';
var value1 = returnValue(dict1, key1);
console.log(value1);

// typeof operator
console.log(typeof dict1.first);
console.log(typeof array1); // use Array.isArray() below for specification
console.log(typeof dict1); 
console.log(typeof max1);
console.log (typeof a);

// Array.isArray() function
console.log(Array.isArray(array1)); 
console.log(Array.isArray(dict1)); // false because this is an object

function determineIsAnArray(input) {
 if (Array.isArray(input)){
     return true;
 }
 else {
     return false;
 }
}

console.log(determineIsAnArray(array1));
console.log(determineIsAnArray(dict1));

function determineIsAnArray2(input){ // shorter way to get this return/false
  return Array.isArray(input);
}

console.log(determineIsAnArray(dict1));
