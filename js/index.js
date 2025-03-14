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