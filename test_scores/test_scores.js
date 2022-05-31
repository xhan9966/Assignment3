"use strict";

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = (selector) => document.querySelector(selector);

const addScore = () => {
  // get user entries
  const name = $("#name").value;
  const score = parseInt($("#score").value);
  let isValid = true;

  // check entries for validity
  if (name == "") {
    $("#name").nextElementSibling.textContent = "This field is required.";
    isValid = false;
  } else {
    $("#name").nextElementSibling.textContent = "";
  }

  if (isNaN(score) || score < 0 || score > 100) {
    $("#score").nextElementSibling.textContent =
      "You must enter a valid score.";
    isValid = false;
  } else {
    $("#score").nextElementSibling.textContent = "";
  }

  if (isValid) {
    names[names.length] = name;
    scores[scores.length] = score;
    $("#name").value = "";
    $("#score").value = "";

    // clear the text area
    $("#scores_display").value = "";
  }
  $("#name").focus();
};

// define dispplayScores function
const dispplayScores = () => {
  var value = "";
  for (var i = 0; i < names.length; i++) {
    value += names[i];
    value += " = ";
    value += scores[i];
    if (i !== names.length - 1) {
      value += "\n";
    }
  }
  $("#scores_display").value = value;
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addScore);
  // add event handler
  $("#display_scores").addEventListener("click", dispplayScores);
  $("#name").focus();
});
