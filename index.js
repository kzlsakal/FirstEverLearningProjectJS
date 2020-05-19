// comment

/* multi-line
   comment
   for testing purposes, this code will have some global variables that should normally be local variables.
   variables that are only assigned and used in functions are local variables.
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
  var d = 2;
  var e = 81;


// if statements - conditionals

  if (b === a) {
  console.log(b, 'is equal to', a);
  }
  if (c > a) {
  console.log(c, 'is bigger than', a);
  }
  else if (c < a) {
  console.log(c, 'is smaller than', a);
  }


// functions
  console.log("\n~~WORKING WITH NUMBERS~~");

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

// square-root
  function squareRoot(num) {
    return Math.sqrt(num);
  }
  console.log(e + "'s square root:", squareRoot(e));

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


// ternary operator -- a ? y : c -- if a is true, evaluate b, otherwise evaluate c.
  console.log("\nUsing ternary operator");
  var stringTernary = 'boo';
  var notStringTernary = 3232;
  var alsoNotString = [2, 'aa', 9];

  function isStringTernary(input) {
    return (typeof input === 'string') ? input + ' is a string' : input + ' is NOT a string'
  }
  console.log(isStringTernary(stringTernary));
  console.log(isStringTernary(notStringTernary));

  console.log((typeof alsoNotString === 'string') ? alsoNotString + ' is a string' : alsoNotString + ' is NOT a string');


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
  console.log("Remember that '" + c + "' was not equal to '" + a + "'? Well, let's make them equal!");
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

// functions revisited
  console.log("\n~~SOME BETTER FUNCTIONS~~");

  arrayNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 121, 122, 123];

  console.log('Let\'s say this is our list of numbers: ' + arrayNumbers);

// finding odd numbers in an array
  function findOddNumbers(array) {
      if (array.length === 0) {
          return [];
      }
      else {
          var arrayOdd = [];
          for (var i1 = 0; i1 < array.length; i1++) {
              if  (array[i1] % 2 !== 0) { // keep the odd numbers by taking out the even numbers
                  arrayOdd.push(array[i1]);
              }
          }
        return arrayOdd; 
      }
  }

  console.log('Our odd numbers: ' + findOddNumbers(arrayNumbers));

// taking a sum of all items/elements

  function sumNumbers(array) {
    if (array.length === 0) {
      return 0;
    }
    else {
      var arraySum = 0;
      for (var i1 = 0; i1 < array.length; i1++) {
        arraySum += array[i1];
      }
      return arraySum;
    }
  }

  console.log('Sum of all listed numbers: ' + sumNumbers(arrayNumbers));

// average value of numbers

  function avgNumbers(array) {
    if (array.length === 0) {
      return 0;
    }
    else {
      var avgValue = 0;
      var numberOfNumbers = 0;
      for (var i1 = 0; i1 < array.length; i1++, numberOfNumbers++) {
        avgValue = (avgValue * numberOfNumbers + array[i1]) / (numberOfNumbers + 1)
      }
      return avgValue;
    }
  }

  console.log('Average value of all listed numbers: ' + avgNumbers(arrayNumbers));

// basic search by value in objects 

  var dictSku = {
    '55 inch TV': 'A55RMC2',
    '65 inch TV': 'B65UUX1',
    '75 inch TV': 'D75AXX2'
  }

  var sku1 = 'D75AXX2';
  var search1 = valueSearch(dictSku, sku1);

  console.log('Searched SKU number:', sku1, 'Product:', search1);

  function valueSearch(object, target) {
    for (var key in object) {
      if (object[key] === target) {
        return key;
      } else {
        /* if we return here, it will stop the function before completing the loop and return -1
        we actually do not need continue here, we can simply remove the else statement, but it is here to
        point out this common error. */
        continue; 
      }
    }
    return -1;
  }

// basic search by value condition in objects
  var arrayNumbers2 = [-50, 80, 225, -33, -72, 56, 89, 10, -11];
  var numberLower = 22;
  console.log('\nThis is the list of our numbers: ' + arrayNumbers2);

  function lowerNumberSearch(array, lowerThan) {
    var countLower = 0;
    for (var i1 = 0; i1 < array.length; i1++) {
      if (array[i1] < lowerThan) {
        countLower++;
      }
    }
    return countLower;
  }
  console.log('There are ' + lowerNumberSearch(arrayNumbers2, numberLower) + ' numbers that are lower than ' + numberLower + '.')


// word counter - counts the number of words that are used in a string

  function countWords(string) {
      if (string.length === 0) {
          return {};
      }
      else {
          var array = string.split(' ');

          var object = {}

          var alert = "";

          for (var i = 0; i < array.length; i++) {
            
          if (object[array[i]] === undefined) {
            object[array[i]] = 1;

            }
          else {
          object[array[i]] += 1;
                                      if (object[array[i]] > 2) {
                                          alert += 'You use the word ' + array[i] + ' too much! ';
                                          }
          }
          }
          var results = [object, alert];
          return results;
          
      }
  }

  var stringWordCount = countWords('umm you are a umm very umm clever of a person');
  console.log('\nThe words and the number of times that they were used:\n', stringWordCount[0], '\n' + stringWordCount[1]);

// eliminating duplicate spaces

  function doubleSpaceEliminator(str) {
    var array = str.split('');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === ' ' && array[i-1] === ' ') {
            delete array[i];
        }
    }
    var result = array.join(''); 
    return result;
  }

  var stringOneSpace = doubleSpaceEliminator("\nI  originally  had  duplicate  spaces.");
  console.log(stringOneSpace);

// selection of an array from an object

  var arraySelection = ['Coffee', 'Bread', 'Eggs'];
  var objectSelection = {'Detergent': 'Aisle 38', 'Coffee': 'Aisle 21', 'Bread': 'Aisle 3', 'Diapers': 'Aisle 48', 'Eggs': 'Aisle 5'} 

  function mySelection(arr, obj) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] !== undefined) {
            result[arr[i]] = obj[arr[i]];
        }
    }
    return result;
  }

  console.log('\nWe want to buy these items: ' + arraySelection.join(', '));
  console.log('... from this catalog:', objectSelection);
  console.log(mySelection(arraySelection, objectSelection));


// find the length of the shortest word in an array

  var arrayShortest = ['Paris', 'Amsterdam', 'Beijing', 'Jakarta'];

  function shortestItem(array) {
    if (array.length === 0) {
        return 0;
    }
    else {
        var result = +Infinity;
        for (var i = 0; i < array.length; i++) {
            if (array[i].length < result) {
                result = array[i].length;
            }
        }
        return result;
  }
  }

  console.log('\nFinding the length of the shortest word in our list: ' + arrayShortest.join(', '));
  console.log('... the answer is:', shortestItem(arrayShortest));


// find the odd numbers in an object's valua at a given key
  // it will also return an empty array if the array is empty, if the property is not an array, or there is no property at the given key.

  var objectOdd = {'some numbers': [-50, 80, 225, -33, -72, 56, 89, 10, -11]};

  function findOdd(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key][0] === undefined ) {
        return [];
    }
    else {
    var arr = [];
    
    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] % 2 !== 0) {
        arr.push(obj[key][i]);
        }
    }
    return arr;
  }
  }

  console.log('\nFinding the length of the shortest word in our list:\n' + objectOdd['some numbers'].join(', '));
  console.log('Here they are:', findOdd(objectOdd, 'some numbers'));


// joining multiple arrays in an array using concat
  /*  pay attention to the line arrNew = arrNew.concat(array[i]);
      if only used arrNew.concat(array[i]); and returned arrNew it returns an empty array*/

  function concatArrays(array) {
  var arrNew = [];
  for (var i = 0; i < array.length; i++) {
      arrNew = arrNew.concat(array[i]);
  }
  return arrNew;
  }
  console.log('\nJoining all arrays in the following array: [[1, 4], [true, false], [\'x\', \'y\']]');
  console.log(concatArrays([[1, 4], [true, false], ['x', 'y']])); 


// taking the sum of each digit in a given number
  // it takes the first digit as a negative number is the given number is negative


  function sumofDigits(num) {
    var result = 0;
    var digitsString = num.toString();
    var digitsArray = digitsString.split('');
    if (digitsString[0] === '-') {
      digitsArray.shift();
      digitsArray[0] = '-' + digitsArray[0];
    }
      
    for (var i = 0; i < digitsArray.length; i++) {
        result += Number(digitsArray[i]);
    }
    return result;
  }

  console.log('\nSum of each digit in 852 is:', sumofDigits(852)); 

// Finding the shortest string in a given array with other types of items
  // It will show the first occurence in case of a tie

  var arrayMixed = [445, 'a string', 20, 'string', 20.5, 0.6, 'hey']

  function shortestString(array) {
  var result = "";
  var resultLength = +Infinity;

  for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string' && array[i].length < resultLength) {
          result = array[i];
          resultLength = array[i].length;
      }
  }
  return result;

  }

  console.log('\nThis is an array:', arrayMixed); 
  console.log('This is the shortest string in it:', shortestString(arrayMixed)); 


// Calculating compound interest
  // This will give the generated interest amount
  /* I = P * (1 + R/N)**(N*T) - P
    I: Interest, P: Principal, R: Nominal annual interest rate, N: Compounding Frequency, T: Length of time */

  function compoundInterest(principal, interestRate, frequency, timeInYears) {
    
  return principal * (1 + interestRate/frequency)**(frequency*timeInYears) - principal 
    
  }

  console.log('\nHere is the compound interest generated for $10,000 with a quarterly compount interest rate of 4.6% over 6 years:', compoundInterest(10_000, .046, 4, 6));

// replicating the multiply operator

  function multiply(num1, num2) {
    var result = 0;
  
    
    for (var i = 0; i < Math.abs(num2); i++) {
        result += Math.abs(num1);
    }
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
    else if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
    return result;
    }
    else {
      return -result;
    }
  }

  console.log('\n-5 * 7 =', multiply(-5, 7));


// replicating the modulo operator

  function modulo(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num2 === 0) {
      return NaN;
  }
  else if (num1 === 0) {
      return 0;
  }
  else if (Math.abs(num2) > Math.abs(num1)) {
    return Math.abs(num2) * Math.abs(num1) / num1;
  }
  else {
    result = 1;
    while ((result * num2) + num2 <= Math.abs(num1)) {
      result++;
    }
    
    // for (var i = num2, result = 1; i + num2 <= Math.abs(num1); i = i + num2) {
    //    result++;
    //}

  }
  return Math.abs(result * Math.abs(num2) - Math.abs(num1)) * Math.abs(num1) / num1;
  }
  console.log('\n-13 % 5 =', modulo(-13, 5));

  function oddNoModulo(num) {
    var numLast = Number(num.toString()[num.toString().length-1])

  if (numLast === 1 || numLast === 3 || numLast === 5 || numLast === 7 || numLast === 9 ){
    return true;
  }
  else {
    return false;
  }
  }
  console.log('\nWe can find out if 111 is an odd number without using modulo.', oddNoModulo(111));


// level 2 nested - converting array[array[array]] to array[object, object]

  var studentData = [
      [
          ['firstName', 'Jessica'], ['lastName', 'Hu'], ['age', 21], ['class', 'Marketing']
      ],
      [
          ['firstName', 'Bob'], ['lastName', 'Humble'], ['age', 25], ['class', 'Economy']
      ]
  ];

  // create an empty array to return later
  var array = [];
  // create an object variable to be used in each iteration
  var object = {};
  // create a loop to iterate each employee in the array
  for (var i1 = 0; i1 < studentData.length; i1++) {

  // reset the object content in the beginning of each employee record
    object = {};

  // create a loop to iterate each key and value in employee
    for (var i2 = 0; i2 < studentData[i1].length; i2++) {

  // assign the employee properties
      object[studentData[i1][i2][0]] = studentData[i1][i2][1];
    }

  // add the employee's properties into the array
    array.push(object);
  }

  console.log('\nAn example of converting array[array[array]] to array[object, object]: ');
  console.log(array);


// debugging and assertion functions

  console.log("\n~~DEBUGGING & ASSERTION~~");

  // here is our function
  function timesTwo(n) {
    return n * 3;
  }

  // here we start debugging
  var result = timesTwo(2); 
  assertionEquality(result, 4, 'it should multiply 2 by 2'); // we need to calculate the second argument here


  // we use this function that checks strict equality
  function assertionEquality(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    }
    else {
        console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
    }
  }


// assertion function for two arrays being equal

  function assertionEqualityArrays(actual, expected, testName) {
      if (actual.length !== expected.length) {
            console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
        }
        
      else {
          for (var i = 0; i < actual.length; i++) {
              if (!(actual[i] === expected[i])) {
            
                  console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
                  break;
              }
              else if (actual[i] === actual[expected.length - 1]) {
                  console.log('Passed')
              }
          }
    
      }
    
  }

  console.log("\nAnother assertion to compare two arrays:");
  var assertArrayExpected = ['a', 'n', 'n', 'a', 'h'];
  var assertArrayActual = 'annah'.split('');
  assertionEqualityArrays(assertArrayActual, assertArrayExpected, 'Splits string into an array');


// assertion function for two objects being equal
// also look up deep object comparison for a more accurate way of doing this

  function assertionEqualityObjects(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log('passed') 
  }
  else {
      console.log('FAILED [' + testName + '] Expected ' + JSON.stringify(expected) + ', but got ' + JSON.stringify(actual))
  }
  }

  var assertObjectActual = {
    firstName: 'Max',
    lastName: 'Field'
  };

  var assertObjectExpected = {
    firstName: 'Max',
    lastName: 'Field',
    yearsInService: 5
  };

  console.log("\nAnd one to compare two objects:");
  assertionEqualityObjects(assertObjectActual, assertObjectExpected, "Some object function that should fail");


// writing a test suite

  // function definition
  function cube(n) {
    return n * n * n;
  }

  // assertion functions

  function assertion(condition, testName) {
      if (condition) {
          console.log('passed');
      }
      else {
          console.log ('FAIL ' + testName);
      }
  }

  // test cases

  console.log("\nCube function test:");
  
  assertion(cube(2) === 8, 'cube of 2 should return 8');
  assertion(cube(3) === 27, 'cube of 3 should return 27');
  assertion(cube(-3) === -27, 'cube of -3 should return -27');


// replicating .every() high order function
  console.log("\nReplicating .every():");

  // function definition
    function every(array, callbackFunction) {
      var doesEveryElementMatch = true;

      for (var i = 0; i < array.length; i++) {
        doesEveryElementMatch = callbackFunction(array[i]);
        if (doesEveryElementMatch === false) {
          return doesEveryElementMatch;
        }
      }

      return doesEveryElementMatch;
  }

  // assertion function
    function assertCheckEquality (actual, expected, testName) {
      if (actual === expected) {
        console.log('passed');
      }
      else {
        console.log ('FAILED [' + testName + ']');
      }
    }

  // test suite
    // functions to test every()
    function lessThanTwenty (value) {
      return value < 20;
    }

    function isAString (value) {
      return typeof value === 'string';
    }

    // testing the 'true' scenario
      var arrayTrue1 = [1, 12, 5, 7, 9];
      var everyTrue1 = every(arrayTrue1, lessThanTwenty)
      // below must say 'passed' if our every() function is working properly.
      assertCheckEquality(everyTrue1, true, 'All of the values in the array are less than 20')

    // testing the 'false' scenario
      var arrayFalse1 = [1, 29, 5, 7, 19];
      var everyFalse1 = every(arrayFalse1, function(value) { // we can define the function inside here too
        return value < 20; 
      })
      // below must say 'passed' if our every() function is working properly.
      assertCheckEquality(everyFalse1, false, 'All of the values in the array are less than 20') 

    // testing the 'true' scenario 2 
      var arrayTrue2 = ['Tom', 'Bob', 'Tim'];
      var everyTrue2 = every(arrayTrue2, isAString)
      // below must say 'passed' if our every() function is working properly.
      assertCheckEquality(everyTrue2, true, 'All of the values in the array are strings')

    // testing the 'false' scenario 2
      var arrayFalse2 = ['Hank', 29, 'Brad', 'Chang'];
      var everyFalse2 = every(arrayFalse2, isAString)
      // below must say 'passed' if our every() function is working properly.
      assertCheckEquality(everyFalse2, false, 'All of the values in the array are strings') 

// replicating .map() high order function - examples callbackFunction
  console.log("\nReplicating .map():");
  // definition of functions
    function map(array, callFunction) {
      var arrayAssign = [];

      for (var i = 0; i < array.length; i++) {
        arrayAssign.push(callFunction(array[i]));
      }

      return arrayAssign;
    }

    function cubeAll(numbers) {
      // will be passing a function as an argument
      return map(numbers, function(n) {
        return n * n * n;
      });
    }

  // assertion function - checking array equality in this case
    function assertCheckArrayEquality (actual, expected, testName) {
      if (actual.length !== expected.length) {
        console.log ('FAILED [' + testName + '] Expected ' + expected + ' got ' + actual);
        return false;
      }
      else {
        for (var i = 0; i < actual.length; i++) {
          if (actual[i] !== expected[i]) {
            console.log ('FAILED [' + testName + '] Expected ' + expected + ' got ' + actual);
            return false;
          }
        }
        console.log('passed [' + testName + ']');
        return true;
      }
    }

  // test cases
    var arrayMap = [1, -3, 4, 2];
    var arrayMapTrue = [1, -27, 64, 8]; 
    var arrayMapFalse = [1, -9, 64, 8];

    assertCheckArrayEquality(cubeAll(arrayMap), arrayMapTrue, 'Should return cubes of all the numbers'); // should return as passed
    assertCheckArrayEquality(cubeAll(arrayMap), arrayMapFalse, 'This will fail if the assertion function is working properly'); // should return as failed


// checking a function that modifies objects
  console.log("\nConverting firstName + lastName to firstName + lastName + fullName in an object:");
  function addFullNameProp(object) {
    var firstName = object.firstName;
    var lastName = object.lastName;

    if (firstName && lastName) {
      object['fullName'] = firstName + ' ' + lastName;
    }

    return object;
  }

  // assertion function will check the equality of two objects
  function assertCheckObjectsEquality(actual, expected, testName) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log('passed')
      return true;
    }
    else {
      console.log ('FAILED [' + testName + '] Expected ' + JSON.stringify(expected) + ' got ' + JSON.stringify(actual));
      return false;
    }
  }

  // test suite
    var objectNames = {firstName: 'Hank', lastName: 'Meyers'};
    var objectWithFullName = {firstName: 'Hank', lastName: 'Meyers', fullName: 'Hank Meyers'};

    var objectNames2 = {lastName: 'Nguyen', age: 25, firstName: 'Xang'};
    var objectWithFullName2 = {lastName: 'Nguyen', age: 25, firstName: 'Xang', fullName: 'Xang Nguyen'};

    // let's make one that should NOT add the fullName property because the lastName is missing
    var objectNames3 = {age: 25, firstName: 'Xang'};
    var objectWithFullName3 = {age: 25, firstName: 'Xang'};    

    assertCheckObjectsEquality(addFullNameProp(objectNames), objectWithFullName, 'Should return the object with fullName property added');

    assertCheckObjectsEquality(addFullNameProp(objectNames2), objectWithFullName2, 'Should return the object with fullName property added');

    assertCheckObjectsEquality(addFullNameProp(objectNames3), objectWithFullName3, 'Should return the original object unchanged because the firstName property is missing');


// checking a function that converts an array of students to an array with objects which include student age properties
  console.log("\nChecking a class list decorator function:");

  // random number generator
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function decorateClassListWithAges(classList) {

    // creates an object for each string in the input array, with an age of 10 or 11
    var result = []
    for (var i = 0; i < classList.length; i++) {
        var object = {};
        var randomAge = getRandomIntInclusive(minAge, maxAge);
        object.name = classList[i];
        object.age = randomAge;
        result.push(object);
    }
    // returns an array of these objects
    return result;
  }

  // assertion function

  function assertClassListEqual(actual, input, testName) {
      if (input.length !== actual.length) {
          console.log('FAILED [' + testName + '] expected ' + input.length + ' items but got ' + actual.length + ' of them.');
      }
      else {
          for (var i = 0; i < input.length; i++) {
            if (input[i] !== actual[i].name) {
              console.log('FAILED [' + testName + '] expected to find the student ' + input[i] + ' but got ' + actual[i].name);
            }
            else if (actual[i] < minAge || actual[i] > maxAge) {
              console.log('FAILED [' + testName + '] expected ages between ' + minAge + ' and ' + maxAge + ' but got age '+ actual[i].age + ' for the student ' + input[i]);
            }
          
          }
        console.log('passed');
      }
  }

  // test suite

  var minAge = 10;
  var maxAge = 11;

  var classArray1 = ['John', 'Jim', 'Bob', 'Brian'];

  var classActual1 = decorateClassListWithAges(classArray1);

  assertClassListEqual(classActual1, classArray1, 'should return a class list with literals')

  console.log(classArray1);
  console.log(classActual1);

// checking if a text is an isogram, using Set and toLowerCase combined
  console.log("\nChecking if a text is an 'isogram':");
  function isAnIsogram(text) {
    var result = true;
    
    // we will convert the text to lowercase since Set will think lowercase and uppercase characters are different values
    var lowercaseText = text.toLowerCase()

    var splitText = lowercaseText.split('');
    
    // dropping the duplicate entries in the array
    var setSplitText = new Set(splitText);

    // checking if the size of the set is equal to the original length of the string
    if (setSplitText.size !== splitText.length) {
        result = false;
    }
    return result;
  }

  // assertion function
  function assertEqual3(actual, expected, testName) {
      if (actual === expected) {
          console.log('passed');
      }
      else {
          console.log('FAILED [' + testName + '] expected ' + expected + ' got ' + actual);
      }
  }

  // test suite
  var stringIsogram = 'anime';

  console.log('testing "' + stringIsogram + '" to return "true"');
  assertEqual3(isAnIsogram(stringIsogram), true, 'should return true for the isogram string');

  var stringNotIsogram = 'commercial';

  console.log('testing "' + stringNotIsogram + '" to return "false"');
  assertEqual3(isAnIsogram(stringNotIsogram), false, 'should return false because the string is not an isogram');

    var stringNotIsogram = 'Atari';

  console.log('testing "' + stringNotIsogram + '" to return "false"');
  assertEqual3(isAnIsogram(stringNotIsogram), false, 'should return false because the string has two "a" letters, one upper-case and one lower-case.');


// finding the word with most repeated characters in a text
  function maxRepeatLettersInWord(word) {
    // Split the word into individual letters
    var wordArray = word.split('');
    // Get the count of each letter's repetition in the word
    var letterObject = {};
    for (var i = 0; i < wordArray.length; i++) {
        if (letterObject[wordArray[i]] === undefined) {
            letterObject[wordArray[i]] = 1;
        }
        else {
            letterObject[wordArray[i]]++;
        }
    }
    // Find the highest count
    var result = 0;
    for (j in letterObject) {
        if (letterObject[j] > result) {
            result = letterObject[j];
        }
    }
    // Return the max repeat count of the word
    return result;
  }

  function wordsWithMostRepeatedLetters(text) {
    // if the argument is not a string, it should prevent the script error.
    if (typeof text !== 'string') {
      return 'The input is not a string';
    }
    var maxRepeatCount = -1;
    var wordsWithHighestRepeatCount = '';

    // Split the text into individual words (delimited space).
    var textArray = text.split(' ');
    
    // Iterate for each word
    for (var k = 0; k < textArray.length; k++) {
    
      var repeatCountForInstance = maxRepeatLettersInWord(textArray[k])

      // If the repeat count for the word is higher than the overall max,
      if (repeatCountForInstance > maxRepeatCount) {
          
        // update maxRepeatCount
        maxRepeatCount = repeatCountForInstance;
        // update wordsWithHighestRepeatCount
        wordsWithHighestRepeatCount = textArray[k];
      }
      // If another word with the same count is found, add it.
      else if (repeatCountForInstance === maxRepeatCount){
        // update wordsWithHighestRepeatCount
        wordsWithHighestRepeatCount = wordsWithHighestRepeatCount + ', ' + textArray[k];
      }
          
    }
    
    // if there are no words to show, it should return an error message.
    if (wordsWithHighestRepeatCount === '') {
      return 'No words found in the text';
    }
    else {
      return wordsWithHighestRepeatCount;
    }
    }

  // assertion functions

  function assertEqualRepeatedLetters(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    }
    else {
      console.log('FAILED [' + testName + '] expected ' + expected + ' got ' + actual);
    }
  }

  // test suite

  var testRepeatedLettersWord1 = 'some movies have delicate spirits';
  assertEqualRepeatedLetters(wordsWithMostRepeatedLetters(testRepeatedLettersWord1), 'delicate, spirits', 'Should show the two words with the highest count');

  var testRepeatedLettersWord2 = '';
  assertEqualRepeatedLetters(wordsWithMostRepeatedLetters(testRepeatedLettersWord2), 'No words found in the text', 'Message should indicate that the string was empty');

  var testRepeatedLettersWord3 = 565565;
  assertEqualRepeatedLetters(wordsWithMostRepeatedLetters(testRepeatedLettersWord3), 'The input is not a string', 'Message should indicate that the original input was not a string');

  var testRepeatedLettersWord4 = 'mamma mia was a great movie';
  assertEqualRepeatedLetters(wordsWithMostRepeatedLetters(testRepeatedLettersWord4), 'mamma', 'Should show one the word with the highest count');


// Prototype + Structures
  console.log("\nA sample of object oriented programming:");

  // create a constructor function with the first letter capitalized
  function Food(name, type) {
    this.name = name;
    this.type = type;
    this.amount = 10;
  }

  // assign a function to a property of the prototype
  Food.prototype.eat = function(ate) {
    this.amount -= ate;
  }

  // create a new instance of our prototype
  var myFood = new Food('Crackers', 'Snack');

  console.log('I bought a new food from the store:', myFood)

  // use the prototype's method on this child

  myFood.eat(2);
  console.log("My food after I ate two crackers:", myFood);


// show a phone number array formatted, using prototype functions.
  // structure function
  function PhoneNumber(numbers) {
    this.numbers = numbers;
  }

  PhoneNumber.prototype.formatted = function() {
    var string = '';
    string += this.parenthesize(this.getAreaCode()) + ' ' + this.getExchangeCode() + '-' + this.getLineNumber();
    return string;
  };

  PhoneNumber.prototype.getAreaCode = function() {
    return this.sliceToString(0,3);
  };

  PhoneNumber.prototype.getExchangeCode = function() {
    return this.sliceToString(3,6);
  };

  PhoneNumber.prototype.getLineNumber = function() {
    return this.sliceToString(6,10);
  };

  PhoneNumber.prototype.parenthesize = function(string) {
    return '(' + string + ')';
  };

  PhoneNumber.prototype.sliceToString = function(start, end) {
    return this.numbers.slice(start, end).join('');
  };

  // test

  var myPhoneNumber = new PhoneNumber([2,1,4,5,6,8,1,1,2,6]);
  console.log('\nNew phone, who dis?', myPhoneNumber.formatted())


// finding the longest palindromic word in a sentence
  function longestPalindrome(sentence) {
    //ensure the input is in valid form  
    if (typeof sentence !== 'string') {
      return 'Invalid sentence. Please input text without symbols or punctuation';
    }
    
    // split sentence into an array of words
    var sentenceArray = sentence.split(' ');

    // collect the palindromic words from the array
    var palindromeList = [];
    for (var i = 0; i < sentenceArray.length; i++) {
      if (isPalindromic(sentenceArray[i])) {
        palindromeList.push(sentenceArray[i]);
      }
    }

    // sort the list by the length of words
    /* below is the .sort() function with its compare option, sorts an array from smallest to largest. */
    palindromeList.sort(function compareStringLength(string1, string2) { return string1.length - string2.length})

    // display a message if there are no palindromes in our list
    if (palindromeList.length < 1) {
      return 'There are no palindromes found in your sentence';
    }

    else{
    // return the longest word in the sorted list
    /* this will pick the last entry in case of a tie. If we want the first one instead, we can change the compare function to return string2.length - string1.length and the return of this function to palindromeList[0]*/
    return palindromeList[palindromeList.length-1];
    }
  }

  // reversing the string to verify if palindromic later
  function reverseString(string) {
  var splitString = string.split('');
  var reversed = splitString.reverse();
  var reversedString = reversed.join('');
  return reversedString;
  }

  //verify if palindromic - needs to be non-case-sensitive
  function isPalindromic(word) {
    return word.toLowerCase() === reverseString(word).toLowerCase();
  }

  // asertion function
  function assertEqualP(actual, expected, testName) {
    if (actual === expected) {
      console.log('Passed:');
      console.log(actual);
    }
    else {
      console.log('FAILED [' + testName + '] expected ' + expected + ' got ' + actual);
    }
  }

  // testing

  var palindromes1 = 'etetete novada atatatata ebebe uranus uwu';
  var expectedPalindromeTest1 = 'atatatata';
  var actualPalindromeTest1 = longestPalindrome(palindromes1);

  assertEqualP(actualPalindromeTest1, expectedPalindromeTest1, 'Should return the longest palindrome in a sentence');

  var palindromes2 = 2313;
  var expectedPalindromeTest2 = 'Invalid sentence. Please input text without symbols or punctuation';
  var actualPalindromeTest2 = longestPalindrome(palindromes2);

  assertEqualP(actualPalindromeTest2, expectedPalindromeTest2, 'Should return an error message since the input is not a string');

  var palindromes3 = 'jo 21';
  var expectedPalindromeTest3 = 'There are no palindromes found in your sentence';
  var actualPalindromeTest3 = longestPalindrome(palindromes3);

  assertEqualP(actualPalindromeTest3, expectedPalindromeTest3, 'Should return an error message since there are no palindromes in the sentence');





// list of inventory redered to flatLine
  console.log('\nFormatted output of an inventory');
  function renderInventory(inventory) {
    
    // return error message if the input is not of the desired type
    if (!Array.isArray(inventory)){
      return 'Invalid inventory type'
    } else if (inventory.length < 1) {    
      // return error message if the input array is empty
      return 'There are no items in the inventory'
    }
    
    var renderedSuitsList = '';

    // iterate over the array for the brands
    for (var i = 0; i < inventory.length; i++) {

      //assign the variable to be used in the loop for each line
      var renderedSuitOneLine = '';

      // assign the array of suit name & prices for easy calling
      var suitsOfThisBrand = inventory[i].suits;

      // iterate over the suits array in the object to bring brand name and each suit object
      for (var j = 0; j < suitsOfThisBrand.length; j++) {
        
        // use a helper function to format each line
        renderedSuitOneLine += renderSuitOneLine(inventory[i].name, suitsOfThisBrand[j].name, suitsOfThisBrand[j].price);

        // iterate over each suit object to bring suit name and price
      }

      // add that 'one line' to the main string
      renderedSuitsList += renderedSuitOneLine;
    }

    return renderedSuitsList;

  }

  // helper function for formatting
  function renderSuitOneLine(brandName, suitName, price) {
    return brandName + ', ' + suitName + ', ' + price + '\n';
  }

  // assertion function

    function assertEqualSuits(actual, expected, testName) {
      if (actual === expected) {
        console.log('Passed [' + testName + ']');
      }
      else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' got ' + actual);
      }
    }

  // test suite

  var currentSuitInventory = [
    {
      name: 'Avaya Mersedes',
      suits: [
        {name: 'executive charcoal flat back ', price: 1650},
        {name: 'signature navy flat back ', price: 1299},
        {name: 'traveler flex tech mesh beige', price: 899},
        {name: 'traveler flex tech mesh dark gray', price: 999}
      ]
    },
    {
      name: 'Bruno Amaretto',
      suits: [
        {name: 'ambassador collection dark navy plaid', price: 799},
        {name: 'signature egyptian linen tropical beige', price: 599}
      ]
    }
  ];

  var incorrectTypeOfInventory = 'I have 2 black suits and one white tuxedo';

  var emptyInventory = [];

  var actualRenderedInventory1 = renderInventory(currentSuitInventory);
  var expectedRenderedInventory1 = 'Avaya Mersedes, executive charcoal flat back , 1650\nAvaya Mersedes, signature navy flat back , 1299\nAvaya Mersedes, traveler flex tech mesh beige, 899\nAvaya Mersedes, traveler flex tech mesh dark gray, 999\nBruno Amaretto, ambassador collection dark navy plaid, 799\nBruno Amaretto, signature egyptian linen tropical beige, 599\n';
  assertEqualSuits(actualRenderedInventory1, expectedRenderedInventory1, 'Should return the suits list one per line');

  var actualRenderedInventory2 = renderInventory(incorrectTypeOfInventory);
  var expectedRenderedInventory2 = 'Invalid inventory type';
  assertEqualSuits(actualRenderedInventory2, expectedRenderedInventory2, 'Should deliver an error message for incorrect inventory format');

  var actualRenderedInventory3 = renderInventory(emptyInventory);
  var expectedRenderedInventory3 = 'There are no items in the inventory';
  assertEqualSuits(actualRenderedInventory3, expectedRenderedInventory3, 'Should deliver an error message for empty inventory');


// Problem statement: Given a string, the function should the positions of the matching letters with the greatest distance between them. For 'zdaczcdd', the answer would be [1 ,7] for the letter 'd'.
  console.log('\nFinding the Longest Distance Between the Two Same Letters in a Word');

  // function
  function findLongestDistanceBetweenSameLetters(word) {
    // assign an empty array to be returned later
    var indexesWithLongestDistance = [];

    // return an error message if the input type is not a string
    if (typeof word !== 'string') {
      return 'Invalid input type. Please enter a string.';
    }

    // change the word to case-insensitive 
    var wordCaseInsensitive = word.toLowerCase();

    // return an error message if the word contains any characters other than a-z
    var alphaChars = 'abcdefghijklmnopqrstuvwxyz';
    for (var h = 0; h < wordCaseInsensitive.length; h++) {
      if (alphaChars.indexOf(wordCaseInsensitive[h]) === -1) {
        return 'Invalid input type. Please enter one word with only alphabetical characters.';
      }
    }

    // assign an object to keep information about each letter
    var letterDistances = {};

    // iterate each letter and record its information
    for (var i = 0; i < wordCaseInsensitive.length; i++) {
      // if the letter is not defined as a property in the object, place it in
      var currentLetter = wordCaseInsensitive[i];
      if (letterDistances[currentLetter] === undefined) {
        letterDistances[currentLetter] = [i];
        
      // if the letter is defined in the object, but has only one index recorded, create the second index.
      } else if (letterDistances[currentLetter][1] === undefined) {
        var firstIndex = letterDistances[currentLetter][0];
        letterDistances[currentLetter] = [firstIndex, i]
        
      } else {
        // if the letter property already exists with two indexes, change the second value to the current index.
        letterDistances[currentLetter][1] = i;
        
      }
    }
    // assign a difference variable to change if the next array has a bigger difference
    var longestDistance = 0;
    // iterate each property's value to find the biggest difference between the two variables in an array
    for (j in letterDistances) {   
      // check if there are two indexes recorded, and see if the distance is larger than the previous record
      if (letterDistances[j].length === 2 && letterDistances[j][1] - letterDistances[j][0] > longestDistance) {
        longestDistance = letterDistances[j][1] - letterDistances[j][0];
        indexesWithLongestDistance = letterDistances[j];
      }
    }
    // return the indexes with the longest distance
    return indexesWithLongestDistance;
  }

  // test functions

  function testLongestDistanceBetweenSameLetters() {
    var testWord = 'zdaczcdd';
    var expectedIndexes = [1, 7];
    var actualIndexes = findLongestDistanceBetweenSameLetters(testWord);
    var resultOfLongestDistanceTest = assertCheckArrayEquality(actualIndexes, expectedIndexes, 'should return the indexes with the longest distance between same letters');
  }

  function testLongestDistanceBetweenSameLettersCaseInsensitive() {
    var testWord = 'zdAczcDD';
    var expectedIndexes = [1, 7];
    var actualIndexes = findLongestDistanceBetweenSameLetters(testWord);
    var resultOfLongestDistanceTest = assertCheckArrayEquality(actualIndexes, expectedIndexes, 'should not be case sensitive');
  }

  function testLongestDistanceWithInvalidInput() {
    var testWord = 51561;
    var expectedError = 'Invalid input type. Please enter a string.';
    var actualIndexes = findLongestDistanceBetweenSameLetters(testWord);
    var resultOfLongestDistanceTest = assertCheckArrayEquality(actualIndexes, expectedError, 'should return an error message if the input is invalid');
  }

  function testLongestDistanceBetweenSameLettersIgnoreSpace() {
    var testWord = 'a b c ac db ';
    var expectedError = 'Invalid input type. Please enter one word with only alphabetical characters.';
    var actualIndexes = findLongestDistanceBetweenSameLetters(testWord);
    var resultOfLongestDistanceTest = assertCheckArrayEquality(actualIndexes, expectedError, 'should return an error message if the input is not a single word with only alphabetical characters');
  }

  // test

  testLongestDistanceBetweenSameLetters()
  testLongestDistanceBetweenSameLettersCaseInsensitive()
  testLongestDistanceWithInvalidInput()
  testLongestDistanceBetweenSameLettersIgnoreSpace()



// should we play this slot machine
  /* problem statement: According to our player, a slot machine can be considered  
    profitable, if the prize multiplied by the probability of winning is larger than the bet that is placed. 
    Create a function that will return true or false based on this information. */

  function decideSlotMachine(bet, prize, probability) {
    // return an error message if any invalid input type is provided
    if (typeof bet !== 'number' || typeof prize !== 'number' || typeof probability !== 'number') {
      return 'Invalid input type. Please enter only numbers.';
    }
    
    // create an if statement to decide if probability * prize is larger than the bet
    if (probability * prize > bet) {
    // return true if the statement is true
    return true;
    } else {
    // return false if the slot machine is not profitable
    return false;
    }
  }

  // assertion function

  function assertEqualBet(actual, expected, testName) {
    if (actual === expected) {
      return console.log('Passed [' + testName + ']'); 
    } else {
      return console.log('Failed [' + testName + '] expected ' + expected + ' got ' + actual);
    }
  }

  // test suite

  function testSlotDeciderInvalidInput() {
    var actual = decideSlotMachine(2.6, 'seven', .9);
    var expected = 'Invalid input type. Please enter only numbers.';
    var resultOfTest = assertEqualBet(actual, expected, 'Should give an error message when the input type is invalid.');
  }

  function testSlotDeciderUnprofitable() {
    var actual = decideSlotMachine(8, 14.1, .4);
    var expected = false;
    var resultOfTest = assertEqualBet(actual, expected, 'Should return false if the slot machine is unprofitable');
  }

  function testSlotDeciderProfitable() {
    var actual = decideSlotMachine(.8, 10, .1);
    var expected = true;
    var resultOfTest = assertEqualBet(actual, expected, 'Should return true if the slot machine is profitable');
  }

  // execution of test suite
  console.log('\nSimple decision-maker for slot machine profitability.');
  testSlotDeciderInvalidInput()
  testSlotDeciderUnprofitable()
  testSlotDeciderProfitable()
