let number = 0;
const numArray = [];
let submenus = document.getElementsByClassName("button");
for (let i = 0; i < submenus.length; i++) {
  submenus[i].onclick = function () {
    for (let i = 0; i < 49; i++) {
      number++;
      let divBox = document.createElement("div");

      numArray[i] = Math.floor(Math.random() * 901) + 100;
      divBox.appendChild(document.createTextNode(numArray[i]));
      divBox.classList.add("container__item");
      let contDiv = document.getElementsByClassName("container");
      contDiv[0].appendChild(divBox);
    }
    let allDivs = document.getElementsByTagName("div");
    console.log(allDivs);
  };
}
