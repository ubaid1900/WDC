
// increment operators
let y = 0;
console.log(y++); // y = y + 1;
console.log(++y); // y = y + 1;

// initialize the loop variable, terminating condition, increment the loop variable
// careful with the terminating condition, might result in infinite loops
for (let p = 0; p < 10; p++) {
    console.log('iteration #' + (p + 1));
}

// let p = 0;
// for (; ; ) {
//     console.log('iteration #' + (p + 1));
//     p = p + 1;
//     if (p >= 10) {
//         break;
//     }
// }

let r = 1;
while (r < 5) {
    console.error('iterating in while loop #' + r);
    r++;
}

let q = 1;
do {
    console.warn('do while' + q);
    q++;
} 
while (q < 5);
