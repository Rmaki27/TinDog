import { dogs } from "./data.js";
import Dog from "./Dog.js";

function getNewDog() {
  const newDog = new Dog(dogs.shift());
  render(newDog);
  return newDog;
}

document.body.addEventListener("click", (e) => {
  if (e.target.dataset.liked && dog.hasBeenLiked === false) {
    console.log("like button clicked");
    dog.setMatchStatus(e.target.dataset.liked);
    dog = getNewDog();
  } else if (e.target.dataset.disliked) {
    console.log("dislike button clicked");
    dog.setMatchStatus(e.target.dataset.disliked);
    dog = getNewDog();
  }
});

function render(dog) {
  document.getElementById("profile-display").innerHTML = dog.getDogHtml();
}

// Render initial dog
let dog = getNewDog();
