import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';

document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.querySelector("form");
  const outputDiv = document.querySelector(".output");
  const textarea = document.querySelector("#string");
  const resetButton = document.querySelector('button[type="reset"]');

  let isSubmitted = false;

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputString = textarea.value.trim();

    if (inputString === "") {
      alert("Vinsamlegast settu inn streng");
      return;
    }

    isSubmitted = true;
    updateOutput(inputString);
  });

  function updateOutput(input) {
    document.querySelector(".input").textContent = input;
    document.querySelector(".longest").textContent = longest(input);
    document.querySelector(".shortest").textContent = shortest(input);
    document.querySelector(".vowels").textContent = vowels(input);
    document.querySelector(".consonants").textContent = consonants(input);
    document.querySelector(".palindrome").textContent = palindrome(input)
      ? "samhverfur"
      : "ekki samhverfur";
    document.querySelector(".reversed").textContent = reverse(input);
    outputDiv.classList.remove("hidden");
  }

  textarea.addEventListener("input", function () {
    const inputString = textarea.value.trim();

    if (isSubmitted && inputString !== "") {
      updateOutput(inputString);
    }
  });

  resetButton.addEventListener("click", function () {
    outputDiv.classList.add("hidden");
    isSubmitted = false;
    document.querySelector("#string").value = "";
  });
});