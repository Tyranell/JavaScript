const animals = ["Fox", "Cow", "Sheep", "Pig", "Dog", "Cat"];
if (animals.includes("Fox")) {
  console.log("Great!");
  animals.unshift("Tiger");
  console.log(animalLegalCheck(animals[0]));
}
function animalLegalCheck(animal) {
  return animals.includes(animal);
}
