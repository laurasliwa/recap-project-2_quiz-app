// phew… not a lot going on here. Please add some code!

// toggle bookmark
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// toggle answer

const answerButton = document.querySelector('[data-js="answer-toggle"]');
const answerView = document.querySelector('[data-js="answer-view"]');

answerButton.addEventListener("click", () => {
  answerView.classList.toggle("card__answer--active");
});
