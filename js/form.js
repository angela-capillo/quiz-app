const questionForm = document.querySelector('[data-js="form"]');
const container = document.querySelector('[data-js="form-container"]');

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //console.log(data);

  const card = document.createElement("li");
  card.className = "card";

  const cardIconButton = document.createElement("button");
  cardIconButton.className = "card__icon-button";

  const cardBookmark = document.createElement("img");
  cardBookmark.className = "card__bookmark";
  cardBookmark.src = "./assets/icons/bookmark-white.svg";

  cardIconButton.addEventListener("click", () => {
    cardBookmark.classList.toggle("bookmarked");
    if (cardBookmark.className.includes("bookmarked")) {
      cardBookmark.src = "./assets/icons/bookmark-purple.svg";
    } else {
      cardBookmark.src = "./assets/icons/bookmark-white.svg";
    }
  });

  const cardTextQuestion = document.createElement("p");
  cardTextQuestion.className = "card__text";
  cardTextQuestion.textContent = data["new-question"];

  const cardButton = document.createElement("button");
  cardButton.className = "card__button";
  cardButton.textContent = "Show answer";

  const cardTextAnswer = document.createElement("p");
  cardTextAnswer.className = "card__text card__text__answer text__hidden";
  cardTextAnswer.textContent = data["new-answer"];

  cardButton.addEventListener("click", () => {
    cardTextAnswer.classList.toggle("text__hidden");
  });

  const cardCategories = document.createElement("ul");
  cardCategories.role = "list";
  cardCategories.className = "card__categories";

  const cardTag = document.createElement("li");
  cardTag.className = "card__tag";
  cardTag.textContent = data["new-tag"];

  cardCategories.append(cardTag);
  cardIconButton.append(cardBookmark);

  card.append(
    cardIconButton,
    cardTextQuestion,
    cardButton,
    cardTextAnswer,
    cardCategories
  );
  container.append(card);
});

const questionInput = document.querySelector('[data-js="new-question"]');
const questionInputCounter = document.querySelector(
  '[data-js="question-remaining-characters"]'
);

// questionInput.addEventListener("input", () => {
//     const inputLength = questionInput.value.length;
//     const inputMaxLength = questionInput.maxLength;
//     const remainingCharacters = inputMaxLength - inputLength;
//     //console.log(questionRemainingCharacters);
//     questionInputCounter.textContent = remainingCharacters + " remaining characters"
// });

function remainingCharacterCounter(input) {
  const inputLength = input.value.length;
  const inputMaxLength = input.maxLength;
  const remainingCharacters = inputMaxLength - inputLength;
  return remainingCharacters;
}

questionInput.addEventListener("input", (event) => {
  const remainingCharacters = remainingCharacterCounter(event.target);
  questionInputCounter.textContent =
    remainingCharacters + " remaining characters";
});

const answerInput = document.querySelector('[data-js="new-answer"]');
const answerInputCounter = document.querySelector(
  '[data-js="answer-remaining-characters"]'
);

// answerInput.addEventListener("input", () => {
//     const inputLength = answerInput.value.length;
//     const inputMaxLength = answerInput.maxLength;
//     const remainingCharacters = inputMaxLength - inputLength;
//     answerInputCounter.textContent = remainingCharacters + " remaining characters"
// });

answerInput.addEventListener("input", (event) => {
  const remainingCharacters = remainingCharacterCounter(event.target);
  answerInputCounter.textContent =
    remainingCharacters + " remaining characters";
});
