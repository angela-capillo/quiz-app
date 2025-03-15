const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

bookmarkButton.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmarked");
    if (bookmarkIcon.className.includes("bookmarked")) {
        bookmarkIcon.src = "./assets/icons/bookmark-purple.svg";
    } else {
        bookmarkIcon.src = "./assets/icons/bookmark-white.svg";
    };
});


const showButton = document.querySelector('[data-js="show-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

showButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("text__hidden");
});


const submitButton = document.querySelector('[]')

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