let dayOfTheWeek = "Tuesday";
let activity;

if (dayOfTheWeek === "Monday") {
  activity = "Kickboksen";
  console.log(activity);
} else if (dayOfTheWeek === "Thursday") {
  activity = "Boksen";
  console.log(activity);
} else if (dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Friday") {
  activity = "BJJ'en";
  console.log(activity);
} else {
  activity = "Patat halen en thuis opeten";
  console.log(activity);
}
