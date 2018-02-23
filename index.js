const cats = require("./cats.js");
const _ = require("lodash");
const colors = require("colors");

const breeds = cats.getBreeds;

function randomPrint(list) {
  const randomBreed = list[_.random(0, list.length - 1)];
  console.log("your cat is: "  + colors.green(randomBreed));
}

randomPrint(breeds)
