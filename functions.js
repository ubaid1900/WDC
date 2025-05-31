function myFunc(p) {
  console.log(arguments);
  console.log(p);
  console.log(typeof p);
}

// function myFunc() {
//   console.log(arguments);
//   console.log(arguments[0]);
//   console.log(typeof arguments[0]);
// }

// undefined type
var x;
myFunc(x);

/* number 
type*/
var x = 1;
myFunc(x);

// string type
x = "some string";
myFunc(x);

// date type
x = new Date();
myFunc(x);

// null type
x = null;
myFunc(x);

let y = 1;
myFunc(x);

const z = "zed"; // const cannot be re-assigned
myFunc(x);
