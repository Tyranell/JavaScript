let sentence = true;

if (sentence == false) {
  sentence = "Whieee";
  console.log(
    `Hello, i shout out the sentence ${sentence} and I am ${
      sentence.length > 5 ? "happy" : "not so happy"
    }`
  );
} else {
  sentence = "Whaaaa";
  console.log(
    `Hello, i shout out the sentence ${sentence} and I am ${
      sentence.length > 5 ? "happy" : "not so happy"
    }`
  );
}
