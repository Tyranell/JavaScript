const sofie = {
  cijfer1: 9.4,
  cijfer2: 3.8,
  cijfer3: 2.7,
  cijfer4: 6.7,
  cijfer5: 8.9,
};

const sarah = {
  cijfer1: 7.7,
  cijfer2: 7.6,
  cijfer3: 7.3,
  cijfer4: 5.8,
  cijfer5: 6.9,
};

let sofieCijfers = Object.values(sofie);
let sarahCijfers = Object.values(sarah);

let hoogsteCijferSofie = Math.max(...sofieCijfers);
let hoogsteCijferSarah = Math.max(...sarahCijfers);

let gemiddeldeCijferSofie =
  (sofie.cijfer1 +
    sofie.cijfer2 +
    sofie.cijfer3 +
    sofie.cijfer4 +
    sofie.cijfer5) /
  5;
let gemiddeldeCijferSarah =
  (sarah.cijfer1 +
    sarah.cijfer2 +
    sarah.cijfer3 +
    sarah.cijfer4 +
    sarah.cijfer5) /
  5;

if (gemiddeldeCijferSarah > gemiddeldeCijferSofie) {
  console.log(
    "Het hogere gemiddelde cijfer is behaald door Sarah en het cijfer is " +
      gemiddeldeCijferSarah
  );
  if (gemiddeldeCijferSarah > 7) {
    console.log("Goed gedaan, hoger dan een 7!");
  }
} else if (gemiddeldeCijferSofie > gemiddeldeCijferSarah) {
  console.log(
    "Het hogere gemiddelde cijfer is behaald door Sofie en het cijfer is " +
      gemiddeldeCijferSofie
  );

  if (gemiddeldeCijferSofie > 7) {
    console.log("Goed gedaan, hoger dan een 7!");
  }
}
