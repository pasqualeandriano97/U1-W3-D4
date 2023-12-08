console.log("prova");
const numeriPossibili = [];
const createAllNumber = function () {
  const numberTabel = document.getElementById("allNumbers");
  for (let i = 0; i < 90; i++) {
    numeriPossibili.push(i + 1);

    const numberDiv = document.createElement("div");
    const number = document.createElement("h3");
    number.classList.add("number");
    number.innerText = i + 1;
    numberTabel.appendChild(numberDiv);
    numberDiv.appendChild(number);
    numberDiv.classList.add("numberDiv");
  }
};

createAllNumber();

const randomF = function () {
  const randomDiv = document.getElementById("random");
  const button = document.createElement("button");
  button.innerText = "Random";
  randomDiv.appendChild(button);
  button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 90);
    const marker =
      document.getElementsByClassName("number")[parseInt(randomNumber)];
    marker.classList.add("marker");
    numeriPossibili.splice(parseInt(randomNumber), 1);
  });
};
randomF();
console.log("numeri possibili", numeriPossibili);
