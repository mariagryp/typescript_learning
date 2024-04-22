"use strict";
//arrays
let stringArr = ["one", "hey", "Dave"]; //string
let guitars = ["Start", "Les Paul", 5150]; //union type
let mixedData = ["EVH", 1984, true]; //union type
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("jim");
guitars = stringArr;
let test = []; //any type of data
let bands = [];
bands.push("Van Halen");
//Tuple (more strict than an array)
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
//myTuple[2] = 42;
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop2 = true;
exampleObj.prop1 = "john";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    //name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
//evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
