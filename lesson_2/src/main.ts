let myName: string = "dave";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number;

myName = "maija"; // string 
meaningOfLife = 43; // number
isLoading = true; //boolean
album = 1986; // number
//album = true;
album = "magnum";

const num = (a: number, b: number) => {
  return a + b;
};

console.log(num(5, 10));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
