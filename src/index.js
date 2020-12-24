import css from "./css/styles.css";
import fetchObject from "./js/fetch";
//import libs from "./js/libs";
import refs from "./js/refs";

const { form, searchButton, gallery } = refs;

// fetchObject.getFetch("dog");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = e.target.elements.query.value;

  fetchObject.getFetch(inputValue, gallery);
});
