const cats = require("./cats.js");
const _ = require("lodash");

const breeds = cats.getBreeds;

function randomPrint(list) {
  const randomBreed = list[_.random(0, list.length - 1)];
  console.log("Yo cat is: " + randomBreed);
}

randomPrint(breeds)
