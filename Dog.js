class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `<img src="${avatar}" class="profile-pic">
            <div class="profile-text" id="profile-text">
                <h2 class="name">${name}, ${age}</h2>
                <p class="bio">${bio}</p>
            </div>
            `;
  }

  setMatchStatus(matchStatus) {
    if (matchStatus === "liked") {
      let { hasBeenLiked } = this;
      document.getElementById(
        "profile-display"
      ).innerHTML += `<img src="./images/badge-like.png" class="liked-badge">`;
      hasBeenLiked = !hasBeenLiked;
      console.log("hasBeenLiked =", hasBeenLiked);
    } else {
      let { hasBeenSwiped } = this;
      document.getElementById(
        "profile-display"
      ).innerHTML += `<img src="./images/badge-nope.png" class="disliked-badge">`;
      hasBeenSwiped = !hasBeenSwiped;
      console.log("hasBeenSwiped =", hasBeenSwiped);
    }
  }
}

export default Dog;
