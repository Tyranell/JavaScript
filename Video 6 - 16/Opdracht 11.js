const currentDate = {
  day: 23,
  month: 12,
  year: 2021,
};

const birthDate = {
  day: 24,
  month: 4,
  year: 1999,
};

let myAge;

if (currentDate.year > birthDate.year) {
  myAge = currentDate.year - birthDate.year;
  if (currentDate.month < birthDate.month) {
    myAge = myAge - 1;
  }
  if (currentDate.month == birthDate.month && currentDate.day < birthDate.day) {
    myAge = myAge - 1;
  }
}

console.log(myAge);
console.log(myAge * 2);
