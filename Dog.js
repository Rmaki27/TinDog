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
      document.getElementById(
        "profile-display"
      ).innerHTML += `<img src="./images/badge-like.png" class="liked-badge">`;
    }
  }
}

export default Dog;
