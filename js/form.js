const submitButton = document.querySelector('[data-js="submit-button"]');


submitButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

});

const card = document.createElement("li");
card.className = "card";

const cardIconButton = document.createElement("button");
cardIconButton.className = "card__icon-button";

const cardBookmark = document.createElement("img");
cardBookmark.src = "./assets/icons/bookmark-white.svg";

const cardTextQuestion = document.createElement("p");
cardTextQuestion.className = "card__text";

const cardButton = document.createElement("button");
cardButton.className = "card__button";

const cardTextAnswer = document.createElement("p");
cardTextAnswer.className = "card__text card__text__answer text__hidden";

const cardCategories = document.createElement("ul");
cardCategories.role = "list";
cardCategories.className = "card__categories";

const cardTag = document.createElement("li");
cardTag.className = "card__tag";

cardCategories.append(cardTag);
cardIconButton.append(cardBookmark);

card.append(cardIconButton, cardTextQuestion, cardButton, cardCategories);