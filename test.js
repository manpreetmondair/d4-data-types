var avow = require('avow');
var moment = require('moment');


// Booleans
function isTrue(value) {
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    if (value === null) {
      return true;
    }
     else{
         return false;
     } 
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
    if (value === undefined) {
      return true;
    }
    else {
         return false;
    } 
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(value) {
   return value.toLowerCase();
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(value) {
    return value.toUpperCase();
 }

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(value, value1) {
    return value.repeat(value1);
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(value, value1, value2) {
    return value.slice(value1, value2);
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord(value1, value2) {
    return value1.split(value2);
}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(value1, value2) {
    return value1.indexOf(value2);
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(value, value1) {
    return value.includes(value1);
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))

// Regular Expressions
function extractZipCode(value) {
    // return value.;
    return value.match(/\d/g).join('')
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber(value) {
    return value.replace(/\D/g, '');
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(value) {
    return Number(value);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(value) {
    return value = value += 1;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
   if(value %3 === 0) 
   {
       return true;
    }
    else {
        return false;
    }
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(value) {
    return  Math.random() * value;

}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(value) {
    return Math.round(value);
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return moment().format('dddd');
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(value) {
   return value.name;
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem(value) {
    return value[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
