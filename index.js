// 👉 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have.

// If there's only one of the item in your collection, it should log "I have a `name`. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

// For example, the result of calling the `describeItem` function with the first item in our collection would be:
// _"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

// Call your function below where you've defined it, handing in the first item in `myCollection`.

// Now run the file again (using `node index.js`);

let myCollection = [
  {
    name: "Duck Hachi",
    count: 1,
    whatILike: "Good Listener",
  },
  {
    name: "Duck Where's Wally",
    count: 2,
    whatILike: "I cannot find him",
  },
  {
    name: "Duck Rocky",
    count: 1,
    whatILike: "Never gives up",
  },
];

function describeItem(myCollection) {
    if (myCollection.count === 1) {
      console.log("I have a " + myCollection.name + ". Here's what I like about it: " + myCollection.whatILike);
    } else {
      console.log("I have " + myCollection.count + " " + myCollection.name + ". Here's what I like about it: " + myCollection.whatILike);
      }
}

// describeItem(myCollection[0]);

// console.log(myCollection[0].count);

// Now make a function called describeCollection that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the myCollection array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your myCollection array).

function describeCollection(arr) {
  arr.forEach(describeItem);
}

describeCollection(myCollection);