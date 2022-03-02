// //
// //  Object destructuring
// //
// const person = {
//   name: 'Mohsen',
//   age: 33,
//   location: {
//     city: 'Tehran',
//     temp: 75
//   }
// };
//
// const { name: firstName = 'Annonymous', age, location: { city, temp: temperature } } = person;
//
//
// console.log(`${firstName} is ${age} years old.`);
// console.log(`It is ${temperature} degree celsius in ${city}.`);
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// // const { publisher: {name: publisherName = 'Self-Published'} } = book;
// console.log(publisherName);

//
// Array destructuring
//
// const address = ['Punak', 'Tehran'];
//
// const [, city, state = 'Isfahan'] = address;
//
// console.log(`You are in ${city} in ${state}`);


const item = ['coffee (iced)', '$3.0', '$3.5', '$3.75']
const [itemName, , itemPrice] = item;
console.log(`A medium ${itemName} is ${itemPrice}.`);
