class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `<img src="${avatar}"
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>`;
  }
}

export default Dog;
