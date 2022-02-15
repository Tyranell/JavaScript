const BMI = 28.6;
const wKnown = 93;
const hKnown = 1.88;
let height;
let weight;

height = wKnown / BMI;
console.log(Math.sqrt(height));

weight = Math.pow(hKnown, 2) * BMI;
console.log(weight);

//BMI = W / (L ^ 2)
//(L ^ 2) = weight / BMI?
//W = (L ^ 2) / BMI?
