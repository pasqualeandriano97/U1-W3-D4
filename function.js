console.log("prova");

const createAllNumber = function () {
  const numberTabel = document.getElementById("allNumbers");
  for (let i = 0; i < 90; i++) {
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
const numeriEstratti = [];
const numeriusciti = [];
const numeriDoppi = [];
const randomF = function () {
  const randomDiv = document.getElementById("random");
  const button = document.createElement("button");
  button.innerText = "Random";
  randomDiv.appendChild(button);
  button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 90);
    numeriEstratti.push(randomNumber);
    // console.log(randomNumber);
    for (let i = 0; i < numeriEstratti.length; i++) {
      if (numeriEstratti[i] !== numeriusciti.length) {
        numeriusciti.push(numeriEstratti[i]);
        const number = document.getElementsByTagName("h3")[randomNumber];
        number.classList.add("marker");
      } else {
        numeriDoppi.push(numeriEstratti[0]);
      }
    }

    console.log("u", numeriusciti);
    console.log("d", numeriDoppi);
  });
};
randomF();
