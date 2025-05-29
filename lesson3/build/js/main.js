"use strict";
let stringArr = ["one", "hey", "Batu"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John"; // No error, as 'stringArr' is an array of strings
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
let test = [];
let bands = []; // Explicitly typed as an array of strings
bands.push("Metallica"); // No error, as 'bands' is an array of strings
bands.push("Van Halen");
//Tuple
let myTuple = ["Batu", 31, true]; // Explicitly typed as a tuple
let mixed = ["Batu", 31, true]; // Implicitly typed as an array of mixed types
mixed = myTuple; // No error, as 'mixed' can hold any type of data
//Objects
let myObj;
myObj = []; // No error, as 'object' can be any type of data
myObj = bands; // No error, as 'object' can be any type of data
myObj = {};
const exampleObj = {
    prop1: "Batu",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie Van Halen",
    active: false,
    albums: [1984, 5150, "Van Halen I"]
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}, active: ${guitarist.active ? "Yes" : "No"}`;
    }
    return `Hello`;
};
console.log(greetGuitarist(evh));
//Enums
// Unlike most Typescript features, enums are not a type-level feature. They are a runtime feature that allows you to define a set of named constants.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
