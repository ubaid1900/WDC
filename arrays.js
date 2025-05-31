let a = 1;

// indexing of arrays start with zero
let arr = [1, 2, 3, 4, 5];
// let arr = [1, "2", "abc", "4", "def"];

// remove an element from the end of the array
arr.pop();
// add an element at the end of the array
arr.push(6);

// remove an element from the start of the array
arr.shift();
// add an element at the start of the array
arr.unshift(0);
const doesTheArrayHas5 = arr.includes(5);
console.log(doesTheArrayHas5);

const _doesTheArrayHas6 = arr.includes(6);
console.log(_doesTheArrayHas6);

for (let i = 0; i < arr.length; i++) {
  const elementAtI = arr[i];
  console.log(elementAtI);
}


