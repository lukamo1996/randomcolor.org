var button = document.getElementById('color-button');
button.addEventListener("click", pickColor, false);
button.addEventListener("input", writeColor, false);

document.addEventListener("click", def, false);

let mysteryButton = document.getElementById('next-button');
mysteryButton.addEventListener("click",colorChange,false);

var randomNumber;
var defaultTextOnSign = button.value;
button.click();
button.focus();

function colorChange() {
  randomNumber = (Math.floor(Math.random() * (999-100)+100));
  document.body.style.backgroundColor = "#" + randomNumber;
  button.value = "#" + randomNumber;
}

function pickColor(event){
  if(button.value === defaultTextOnSign){
      button.value = "#";
    }
  else return false;
}

function writeColor(){
  if(button.value === defaultTextOnSign) button.value = "fuck u";
  else if(button.value.includes("#") === false){
      button.value = "#" + button.value;
      document.body.style.backgroundColor = button.value;
    }
  else document.body.style.backgroundColor = button.value;
}

function def(event){
  if(event.target.id !== "color-button"){
      if(button.value === "#") button.value = defaultTextOnSign;
      else return false;
    }
  else return false;
}
