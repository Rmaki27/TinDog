class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `<img src="${avatar}" class="profile-pic">
            <div class="profile-text">
                <h2 class="name">${name}, ${age}</h2>
                <p class="bio">${bio}</p>
            </div>`;
  }
}

export default Dog;
