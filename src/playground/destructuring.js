// object destructuring
// const person = {
//     name: 'Donald',
//     age: 37,
//     location: {
//         city: 'Atlanta',
//         temp: 85
//     }
// }

// const {name = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', , '19147'];
const [street, city, state = 'New York', zip] = address;
console.log(street, city, state);

const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];
const [drink, small, medium, large] = item;

console.log(`A medium ${drink} costs ${medium}`);
