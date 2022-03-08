const add = (x, y) => x + y;
const numbers = [add(2, 3), add(2, 5)];
console.log(numbers.length);
console.log(numbers.push(add(4, 6)));
console.log(numbers.length ** numbers.length);
