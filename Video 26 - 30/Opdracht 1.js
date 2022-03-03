let dagVanDeWeek = "Saturday";
let kerst = false;

if (kerst == false) {
  switch (dagVanDeWeek) {
    case "Monday":
    case "Thursday":
    case "Friday":
      console.log("Het eten vandaag is falafel met salade.");
      break;
    case "Tuesday":
    case "Wednesday":
      console.log("Het eten vandaag is spinazie.");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Het eten vandaag is linzensoep.");
      break;
  }
} else if (kerst == true) {
  console.log("Het is kerst! Het etenvandaag is kalkoen!");
}
