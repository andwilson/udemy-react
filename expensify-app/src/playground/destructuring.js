//
// Object Destructuring
//
//
// const person = {
// name: "Andrew",
//   age: 27,
//   location: {
//     city: "Boston",
//     temp: 40
//   }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }
//
// const Book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const { name: publisherName = "Self-Published" } = Book.publisher
//
// console.log(publisherName); //
//
//
// Array Destructuring
//
// const address = ["100 Empire St", "Shrewsbury", "Massachusetts", "01545"];
// const [, city, state = "New York"] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75",];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
