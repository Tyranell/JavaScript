let number = 0;
let submenus = document.getElementsByClassName("button");
for (let i = 0; i < submenus.length; i++) {
  submenus[i].onclick = function () {
    for (let i = 1; i < 50; i++) {
      number++;
      let divBox = document.createElement("div");
      divBox.appendChild(document.createTextNode(number));
      divBox.classList.add("container__item");
      let contDiv = document.getElementsByClassName("container");
      contDiv[0].appendChild(divBox);
    }
  };
}
