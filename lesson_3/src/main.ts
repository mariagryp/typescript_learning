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
let bands: string[] = [];
bands.push("Van Halen");

//Tuple (more strict than an array)
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

mixed = myTuple;
//myTuple[2] = 42;

// Objects
let myObject: object;
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

interface Guitarist {
  name?: string;
  //active: boolean;
  active: boolean; //boolean or undefined - optional, can be deleted from the evhv active line
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};
let jp: Guitarist = {
  //name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

//evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));

//enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
