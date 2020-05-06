// comment

/* multi-line
   comment
*/

// this is the same as print
console.log('hello world'); // this is the way
console.log("\n~~BASIC MATH AND EQUATIONS~~");

//you can throw random values in the code, it does not break the compiler.
"a string";
2321;

// define var using = sign 
// order is important like in Phython
var myprint = "another string";
var myprint2 = " bites the dust";
console.log(myprint + myprint2);

// math
console.log("Four times two:", 4*2);

// if both conditions are true
console.log("Both conditions are true &&:", true && true);
console.log("One of them is false &&:", true && false);

// if one of the conditions is true
console.log("One of the condities is true ||:", true || false);
console.log("Both of them are false ||:", false || false);

// check if equal with ===
// using == instead will try to disregard the type of the variable
console.log("Is 870 equal to 870:", 870 === 870);
console.log("Is 870 equal to 875:", 870 === 875);
console.log("is 'red' equal to 'red':", 'red' === 'red');
console.log("is 'red' equal to 'yellow':", 'red' === 'yellow');

// variables

var a = 45;
var b = 45;
var c = 15;
var d = 2

// if statements

if (b === a) {
console.log(b, 'is equal to', a);
}
if (c > a) {
console.log(c, 'is bigger than', a);
}
else if (c < a) {
console.log(c, 'is smaller than', a);
}


console.log("\n~~WORKING WITH NUMBERS~~");
// functions

function add (num1, num2) {
return num1 +  num2;
}

// calling functions

var total = b + " + " + c + " is " + add(b, c);
console.log(total);

// numbers
// integer, float and max

var max1 = +Infinity;
var max2 = -Infinity;

console.log("This is a symbolic 'number':", max1);
console.log("And this:", max2);

// power/exponent

function getPower(num1, num2) {
var result = num1 ** num2;
return result;
}
console.log("2 to the 4th power:", getPower(2, 4));

// modulo

var numToMod = 5;
var mod1 = 2
console.log("Using modulo! 5 % 2:", numToMod % mod1); // should return the remainder 1

// increment

var increment = 11;
increment += 2;
console.log('increment 11 by 2:', increment);

// decrement

function decrement(base, decrement) {
var result = base -= decrement;
return result;
}
console.log('decrement 11 by 2:', decrement(11,2));

// time-equals

function applyTimesEquals(base, multiplier) {
base *= multiplier
return base
}
console.log('Using 10 times-equals 3:', applyTimesEquals(10,3));

// divide-equals

function applyDivideEquals(base, divider) {
base /= divider;
return base;
}
console.log('Using 50 divide-equals 5:', applyDivideEquals(50,5));

// absolute value

function getAbsoluteValue(num) {
var result = Math.abs(num);
return result;
}
console.log('Getting the absolute value of -225:', getAbsoluteValue(-225));

// rounding with floor & ceiling methods of Math

function round(num) {
var result = Math.floor(num);
return result;
}
console.log("round 7.33355 normally:", round(7.33355));

function roundDown(num) {
var result = Math.floor(num);
return result;
}
console.log("now round it to the floor:", roundDown(7.33355));

function roundUp(num) {
var result = Math.ceil(num);
return result;
}
console.log("and round it to the ceiling:", roundUp(7.33355));


// rounding with decimals is tricky because of the difference between base 2 and base 10
// for instance 0.1 + 0.2 equals to 0.30000000000000004 instead of 0.3
// so use a tolerance for equation checks or a small number such as Number.EPSILON

console.log("round something with two decimals:", Math.round(7.33355565 * 100) / 100);
console.log("now round it with three decimals:", Math.round(7.33355565 * 1000) / 1000);
console.log("you want to round something with three decimals and be safe:", Math.round((1.0049 + Number.EPSILON) * 1000) / 1000);

// random number
// Math.random() always returns a number between 0 and 1, excluding 1.

function generateRandomNumber(min, max) {
randomNumberMax = 10;
randomNumberMin = 1;
randomNumber = Math.random() * (randomNumberMax - randomNumberMin) + randomNumberMin;
return randomNumber;
}
console.log("I am kind of a random number:", Math.round(generateRandomNumber(1, 100)));

// greater/less than or equal

function applyLessThanOrEqualTo(num1, num2) {
result = num1 <= num2;
return result; // will return true or false
}
console.log("Is 4 less than or equal to 3.9:", applyLessThanOrEqualTo(4, 3.9));

// parsing Int or Float from a String with Number methods
// it is a get function, so it does not modify the original variable's type unlike using methods.
// changing 566.55 will just disregard the decimals part, so no rounding here.

function applyParseInt(numString) {
var result = Number.parseInt(numString);
return result;
}

stringToNum1 = "566";
numInt = applyParseInt(stringToNum1);
console.log(stringToNum1, "is now a", typeof numInt, "under nother variable:", numInt);


function applyParseFloat(numString) {
var result = Number.parseFloat(numString);
return result;
}

stringToNum2 = "566.89";
numFloat = applyParseFloat(stringToNum2);
console.log(stringToNum2, "is now a", typeof numFloat, "under nother variable:", numFloat);

// converting another type of variable to a string
console.log("\n~~WORKING WITH STRINGS~~");

numToString = 555;
numToString.toString();
console.log(a, "is now a", typeof numToString + ". Because we used a method.");

/* note:
try to get it in a variable first, because;
11.toString(); will throw an error
var num = 11;
num.toString(); this is valid
Number(11).toString(); this is also valid
*/

// strings

var string1 = 'Hoorayo!';
console.log("Introducing our new string:", string1);

var firstChar1 = string1[0]; // will return the first character
var thirdChar1 = string1[3]; // will return the fourth character

console.log("First and third characters:", firstChar1 + thirdChar1); // will return Hr
console.log("And now separated by space:", firstChar1, thirdChar1); // will separate them by space and return H r

function returnString(string, index) {
  return string[index];
}

var stringFindChar = returnString(string1, 4);
console.log("This will find index 4, meaning the 5th character:", stringFindChar);

// escape characters - use \ to cancel an apostrophe. use \n to make a new line.

var stringMulti = 'Aren\'t you a multiline string\nwith an apostrophe?';
console.log(stringMulti);

// Getting the length of a string

var name1 = "Alan Boksic";
console.log('Lenght of the name', name1 + ":", name1.length);

// getting the last character of a string (index as -1 does not work here)

var stringLast = string1[string1.length - 1];
console.log("Last character of", string1 + ":", stringLast);

// chopping a string with .substring(firstindex, lastindex+1) method
var stringChop1 = string1.substring(2,6); // from the first index to the last index, excludes the last index.
console.log("Chopped String:", stringChop1);

var stringChop2 = string1.substring(2); // from the first index to end of the string.
console.log("Chopped String:", stringChop2);

// chopping a string with .substr(firststring, lenght) method

var stringChop3 = string1.substr(2,2);
console.log("Chopped String:", stringChop3);

// search the index of a substring within a given string

var indexSearched1 = string1.indexOf("o");
console.log("Index of the first-found substring \"o\":", indexSearched1);

// .indexOf(substring, startPosition) will allow us to start searching at a given index
var stringToSearch = "o"
var indexSearched2 = string1.indexOf(stringToSearch, string1.indexOf(stringToSearch) + 1); 
console.log("Index of the second-found substring \"o\":", indexSearched2);

// .indexOf will return -1 if the substring is not found in the string
var indexSearched3 = string1.indexOf("Find me if you can");
if (indexSearched3 === -1) {
  console.log("Sorry, the searched string was not found.");
}
else {
  console.log("Index of the substring:", indexSearched3);
}

// arrays
console.log("\n~~WORKING WITH ARRAYS~~");

var array1 = ['some string', 'some other string', 'and another string'];
console.log("We have a new array:", array1);
console.log("This is its 2nd item:", array1[1]);

// length of an array
console.log("This list has", array1.length, "entries.");

// getting the last element of an array (index as -1 does not work)
console.log ("Last in line:", array1[array1.length - 1]);

// add a new item to the end of an array with .push() method
array1.push("Hi, I'm new here!");
console.log("Adding a new item to the end.", array1);

// remove the last item in an array with .pop() method
array1.pop();
console.log("And now removing it.", array1);

/* see below under .shift() for assiging a variable to removed elements */

// add a new item to the beginning of an array with .unshift() method
array1.unshift("I come first!");
console.log("Adding a new item to the beginning.", array1);

// remove the first item of an array with .shift() method
array1.shift();
console.log("You guessed right, we are removing it.", array1);

/* Careful! a variable assigned to the .shift() method will become the item that is removed from the array
It will also permanently removed from the list even if it is executed in a print function */

console.log("I am removed:", array1.shift());

// add and remove items at a specific index of an array
// array.splice(index, howmanytoremove, item1, ... , itemN)
/*a variable assigned to the .splice() method will become the item that is removed from the array.
It will not include the added item.
It will also permanently removed from the list even if it is executed in a print function.*/
array1.splice(1, 0, "I get in between");
console.log("We have got another newcomer:", array1);

var arrayToRemove = ["aa1", "bb2", "cc3", "dd4"];
console.log("Hey, we are an array too:", arrayToRemove);
var removedItem = arrayToRemove.splice(1, 2, "xx0");
console.log("We were removed from that list quickly:", removedItem, ". This is the array now:", arrayToRemove);

// create a new array from a part of an existing array
// array.slice(start, end) -- excludes end
// slice() will create a copy of an existing array when assigned to a variable
var array2 = array1.slice(0, 2);
console.log("We are part of the previous array, created a copy:", array2);

var array3 = array1.slice(1); // this includes from 1 to the end of the array
console.log("And created another copy:", array3);

// adding an array into another array / merging arrays
// array.concat(addedArray, addedArray2, ... , addedArrayN)
array4 = ["yet another", "me too", "and me too"];
arrayTogether = array1.concat(array4);
console.log("When an array is added to another array:", arrayTogether);

// convert an array to a string with .join(separator) method
sentenceFromArray = array1.join(", ");
console.log("This array became a string:", sentenceFromArray);

// convert a string to an array with .split()
var stringToBeSplit = "John: Hannah";
arrayFromString1 = stringToBeSplit.split(": ");
console.log("And a string became an array:", arrayFromString1);
arrayFromString2 = stringToBeSplit.split(""); 
console.log("Well, it also split into pieces:", arrayFromString2);


// ocjects - dictionaries
console.log("\n~~WORKING WITH OBJECTS~~");

var dict1 = {
  'first': 'this is the first string',
  'second': 'this is the second string',
  'third': 'this is the third string'
}
console.log("This is an object:", dict1);
console.log(dict1['second']);
console.log(dict1.third);

// objects with functions

function returnValue(object, key){
  return object[key]; // this has to be bracket type because .key will look for the 'key entry' instead of calling the variable
}
var key1 = 'first';
var value1 = returnValue(dict1, key1);
console.log(value1);

// we check the presence of a searched key by getting a true/false from matching it with undefined
var key2 = "third";
function isPropertyPresent(object, key) {
    var isPresent = object[key] !== undefined;
    return isPresent;
}

console.log("Is property", "'"+key1+"'", "present in our object?", isPropertyPresent(dict1, key2));
  
// convert the keys of an object to an array with Object.keys() method

var keys1 = Object.keys(dict1);
console.log("Here is a list of our keys:", keys1);

// convert the values of an object to an array with Object.values() method

var values1 = Object.values(dict1);
console.log("Here is a list of our values:", values1);

// removing an item from an object with delete
delete dict1["second"];
console.log("This is what's left after removing the second item:", dict1);


console.log("\n~~UNDERSTANDING THE TYPE OF A VARIABLE~~");
// typeof operator
console.log("Type of the first entry of the object is:", typeof dict1.first);
console.log("Type of our previous list (array) is:", typeof array1); // use Array.isArray() below for specification
console.log("Type of our last object (dictionary) is:", typeof dict1); 
console.log("There is only one type of", typeof max1, "in this language (kind of).");

// Array.isArray() function
console.log("isArray can be more specific about our array than typeof:", Array.isArray(array1)); 
console.log("Will it think our object is an array too?", Array.isArray(dict1)); // false because this is an object

function determineIsAnArray(input) {
 if (Array.isArray(input)){
     return true;
 }
 else {
     return false;
 }
}

console.log("So, the array was an array.", determineIsAnArray(array1));
console.log("Was the object (dictionary) an array too?", determineIsAnArray(dict1));

function determineIsAnArray2(input){ // shorter way to get this return/false
  return Array.isArray(input);
}
console.log("Are you able to do that with a shorter code?", !determineIsAnArray(dict1)); // !something brings the opposite of something

// while loops
console.log("\n~~WHILE LOOP~~");
console.log("Well, let's make them equal!");
while (c < a) {
  console.log (c);
  if (c === a - 1) {
    console.log ("Almost there!")
  }
  c += 1;
}
console.log(c);
console.log("Finish!");

// while loop in array
console.log("\nWhile loops can be used with arrays.");
var arrayWhile = ['Ben', 'Tom', 'Hank', 'Frank'];
var indexWhile = 0;
while (indexWhile < arrayWhile.length) {
  console.log ('Person', indexWhile + 1 + ':', arrayWhile[indexWhile]);
  indexWhile++
} 

// for loops
// for(var; keepLoopingWhileThisIsTrue; whatHappens) -each semicolon expression is optional
// var++ means var = var + 1
console.log("\n~~FOR LOOP~~");
for (d; d<=5; d++) { 
  console.log(d);
}

// for loop in array 
console.log("\nFor loops can be used with arrays.");
for (var indexFor = 0; indexFor < arrayWhile.length; indexFor++) {
  console.log('Person', indexFor + 1 + ':', arrayWhile[indexFor]);
} 

// using continue with loops -allows skipping certain iterations
console.log("\nTom is sick today, so we won't list his name.");
for (var indexFor = 0; indexFor < arrayWhile.length; indexFor++){
  if (arrayWhile[indexFor] === 'Tom') {
    continue;
  }
  console.log('Person', indexFor + 1 + ':', arrayWhile[indexFor]);
} 

// using break with loops -allows breaking the loop at a certain condition
console.log("\nThe room will be full with 2 people, so the rest cannot enter.");
for (var indexFor = 0; indexFor < arrayWhile.length; indexFor++){
  if (indexFor + 1 > 2) {
    break;
  }
  console.log('Person', indexFor + 1 + ':', arrayWhile[indexFor]);
} 

// for in loops
// works with objects. can also be used with strings and arrays. does NOT work with numbers.
console.log("\nFor in loops are useful to use with objects.");
var object1 = {1: 'Uganda', 2: 'Kenya', 3: 'Ethiopia'};
for (var keyIn in object1) {
  console.log('Country name', keyIn + ':', object1[keyIn]);
}
/*Be careful! the keyIn here is changed permanently outside of the loop as well.
  Do not use these in-loop variables elsewhere*/

// nested loops
console.log("\nNested loops are really helpful!");

arrayNested = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log('This is a nested array:', arrayNested);
console.log('And we can list each item in its sub-arrays with a nested loop:');
var text1 = "";
for (var i1 = 0; i1 < arrayNested.length; i1++) {
  for (var i2 = 0; i2 < arrayNested[i1].length; i2++){
    text1 += arrayNested[i1][i2];
  }
}
console.log(text1);

// nested loops can be mix-matched as for and for in loops vice versa
console.log("\nThey are even more helpful with a nested array of objects.");
var arrayMixmatch = [
  {name: 'Hannah', diagnosis: 'Flu', status: 'Released'},
  {name: 'Kate', diagnosis: 'Cold', status: 'Appointment made'},
  {name: 'Bill', diagnosis: 'Measles', status: 'Treating'}
];

console.log('This is an array objects:', arrayMixmatch);
console.log('And we can list each patient with their information:');

for (var i1 = 0; i1 < arrayMixmatch.length; i1++){
  var patient = arrayMixmatch[i1];
  console.log('- Patient', i1,'-');
  for (var i2 in patient) {
    
    console.log(arrayMixmatch[i1][i2]);
  }
}

// another example of nested loops, this time an object has arrays.
console.log("\nOr we can use it for objects that have their items as arrays.");
var objectMixmatch = {
  'Engineering Class': ['Vanessa', 'Tim', 'Andrew'],
  'Sociology Class': ['Brad', 'Natasha'],
  'Hospitality Class': ['Elon', 'Mark', 'Greg', 'Anna']
}
console.log('This is an object of arrays:', objectMixmatch);
console.log('And we can list each class with their students:');

for (var i1 in objectMixmatch) {
  console.log(' - ' + i1 + ' - '); // i1 becomes the key each time
  for (var i2 = 0; i2 < objectMixmatch[i1].length; i2++){
    console.log(objectMixmatch[i1][i2]);
  }
}

// how to do combinations with nested loops
console.log("\nLastly, we can see different car and color combinations.");
arrayColor = ['Red', 'Burgundy', 'Black', 'White'];
arrayBrand = ['Toyota', 'Mercedes', 'Hyundai'];
for (var i1 = arrayColor.length - 1; //this is how you do reverse 
i1 >= 0; i1--) {
  for (var i2 = 0; i2 < arrayBrand.length; i2++) {
    console.log ('A ' + arrayColor[i1] + ' ' + arrayBrand[i2])
  }
}
