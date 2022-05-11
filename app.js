/* Question1 */

function filterOutFalsy (elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, 'Dog'));

/* Question1 */

/* Question2 */

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

/* Question2 */

/* Question3 */

function lastElem(arr) {
    return arr[arr.length-1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));

/* Question3 */

/* Question4 */

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

/* Question4 */

/* Question5 */

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

/* Question5 */

/* Question6 */

function calcTime(sec) {
    let timerMin = Math.floor(sec/60);
    let timerSec = sec%60;

    if (timerMin.toString().length === 1) {
        timerMin = '0' + timerMin;
    }

    if (timerSec.toString().length === 1) {
        timerSec = '0' + timerSec;
    }

    return timerMin + ':' + timerSec;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

/* Question6 */

/* Question7 */

function getMax(arr) {
    // let max = 0;
    // for (let i = 0; i < arr.lenth; i++) {
    //     console.log(arr[i])
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    // return max;
    return Math.max(...arr);
}

console.log(getMax([300, 1000, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

/* Questio7 */

/* Questio8 */

function reverseString(str) {
    // let result = '';
    // for (let i = str.length-1; i >= 0; i--) {
    //     result += str[i];
    // }
    // return result;
    return str.split('').reverse().join('');
}

console.log(reverseString('abc'));
console.log(reverseString('Megumi'));
console.log(reverseString('This is Cool!'));

/* Questio8 */

/* Questio9 */

function convertToZeros(arr) {
    return arr.map(elem => 0);
    // return new Array(arr.length).fill(0);
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

/* Questio9 */

/* Questio10 */

function removeApples(arr) {
    // let noApples = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== 'Apple') {
    //         noApples.push(arr[i]);
    //     }
    // }
    // return noApples;
    return arr.filter(word => word !== 'Apple');
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples(['Tomato', 'Orange', 'Banana']));
console.log(removeApples(['Banana', 'Orange', 'Apple']));

/* Questio10 */

/* Questio11 */

function filterOutFalse (arr) {
    // let truthyArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!!arr[i] === true) {
    //         truthyArr.push(arr[i]);
    //     }
    // }
    // return truthyArr;
    return arr.filter(elem => !!elem === true);
}

console.log(filterOutFalse ['', [], 0, null, undefined, '0']);
console.log(filterOutFalse ['Tomato', 'Orange', 'Banana', false]);
console.log(filterOutFalse ['Banana', 'Orange', 'Apple']);

/* Questio11 */

/* Questio12 */

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, 'David', '', []]));

/* Questio12 */
