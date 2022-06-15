// CHALLENGE 1
console.log('%cChallenge 1:', "color:white; background-color: orange");

function createFunction() {
	return () => console.log('hello');
}

const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
console.log('%cChallenge 2:', "color:white; background-color: orange");

function createFunctionPrinter(input) {
	return function() {
  	console.log(input);
  }
}


const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
console.log('%cChallenge 3:', "color:white; background-color: orange");

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.


willCounter(); // -> 1
willCounter(); // -> 2
willCounter(); // -> 3

jasCounter();	// -> 1
willCounter(); // -> 4

function addByX(x) {
  return function(input) {
    return input + x;
  }
}


const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
console.log('%cChallenge 4:', "color:white; background-color: orange");

function once(func) {
	let result;
  return function (param) {
    if (!result) {
      result = func(param);
      return result;
    } else {
      return result;
    }
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
console.log('%cChallenge 5:', "color:white; background-color: orange");

function after(count, func) {
	let times = 0;
  return function() {
    if (times >= count - 1) {
      func();
    }
    times++;
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
console.log('%cChallenge 6:', "color:white; background-color: orange");

// using ES6 rest paramenter + spread syntax
function delay(func, wait, ...rest) {
	setTimeout(func, wait, ...rest);
}

delay(function sumItAll(...rest) {
  console.log('%cChallenge 6 result (async):', "color:orange;");
  console.log(rest.reduce((a, b) => a+b, 0))
}, 2500, 4, 2, 14);


// CHALLENGE 7
console.log('%cChallenge 7:', "color:white; background-color: orange");
function rollCall(names) {
  let idx = 0;
  return function() {
    const result = idx < names.length ? names[idx++] : 'Everyone accounted for'; 
		console.log(result);
  }
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
console.log('%cChallenge 8:', "color:white; background-color: orange");

function saveOutput(func, magicWord) {
  const history = {};
	return function (param) {
    if (param === magicWord) {
      return history;
    }
    history[param] = func(param);
    return history[param];
  }
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
console.log('%cChallenge 9:', "color:white; background-color: orange");

function cycleIterator(array) {
	let idx = 0;
  return function() { 
		return array[idx++%array.length];
  }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
console.log('%cChallenge 10:', "color:white; background-color: orange");

console.log('// Challenge 10 //');
function defineFirstArg(func, arg) {
	return function partiallyApplied(...rest) {
  	return func(arg, ...rest);
  }
}

// curry test
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// partial application test
const multiplyThenSubtract = function (z, y, x) { return z * y - x; };
const multiplyBy100ThenSubstractX = defineFirstArg(multiplyThenSubtract, 100);
console.log(multiplyBy100ThenSubstractX(0.5, 8)); // => should log 42


// CHALLENGE 11
function dateStamp(func) {

}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {

}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {

}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {

}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {

}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {

}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {

}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
