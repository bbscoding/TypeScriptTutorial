"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return '' + a + b;
    }
};
let myVal = addOrConcat(2, 3, 'concat');
//Be careful! TS sees no problem - but as a string is retrned
let nextVal = addOrConcat(2, 3, 'concat');
10; // this is ok, but not recommended --force casting
//The DOM
const img = document.querySelector('img'); // The ! operator asserts that the element is not null
const myImg = document.getElementById('img'); // Type assertion to HTMLImageElement
const nextImg = document.getElementById('img'); //this will not work for tsx (react)
img.src;
myImg.src;
