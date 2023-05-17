import { dogs } from "./data.js";
import Dog from "./Dog.js";

const dog1 = new Dog(dogs[0]);

console.log(dog1.getDogHtml());

function render() {
  document.getElementById("profile-display").innerHTML = dog1.getDogHtml();
}

render();

document.body.addEventListener("click", (e) => {
  if (e.target.dataset.liked && dog1.hasBeenLiked === false) {
    console.log("like button clicked");
    // console.log(e.target.dataset.liked);
    dog1.setMatchStatus(e.target.dataset.liked);
  } else if (e.target.dataset.disliked) {
    console.log("dislike button clicked");
    dog1.setMatchStatus(e.target.dataset.disliked);
  }
});
