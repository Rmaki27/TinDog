import { dogs } from "./data.js";
import Dog from "./Dog.js";

const dog1 = new Dog(dogs[0]);

console.log(dog1.getDogHtml());

function render() {
  document.getElementById("profile-display").innerHTML = dog1.getDogHtml();
}

render();
// console.log(dogs);
