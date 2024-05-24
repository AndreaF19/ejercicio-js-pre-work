/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Andrea from the console!");
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My son"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);

  let actionIndx = Math.floor(Math.random() * action.length);

  let whatIndex = Math.floor(Math.random() * what.length);

  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndx]
  );
};
