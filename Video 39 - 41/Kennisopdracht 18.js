const add = [1, 2, 3];
add.unshift(4);
const x = add.pop();
const y = add.pop();
const z = add.shift();
console.log(z);
console.log(add.length + add[0] + x + y);
