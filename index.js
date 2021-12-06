import myCollection from "./collection.js";

import chalk from "chalk";

function describeItem(myCollection) {
  if (myCollection.count === 1) {
    console.log(
      "I have a " +
        chalk.cyan(myCollection.name) +
        ". Here's what I like about it: " +
        chalk.green(myCollection.whatILike)
    );
  } else {
    console.log(
      "I have " +
        chalk.yellow(myCollection.count) +
        " " +
        chalk.cyan(myCollection.name) +
        ". Here's what I like about it: " +
        chalk.green(myCollection.whatILike)
    );
  }
}

console.log(chalk.yellow("hello"));
// describeItem(myCollection[0]);

// console.log(myCollection[0].count);

// Now make a function called describeCollection that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the myCollection array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your myCollection array).

function describeCollection(arr) {
  arr.forEach(describeItem);
}

describeCollection(myCollection);
