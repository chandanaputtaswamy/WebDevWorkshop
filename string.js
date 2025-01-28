let greeting = "Hello World!";
console.log(greeting);

console.log(greeting[0]);
console.log(greeting[7]);

console.log(greeting.length);

let newGreeting=greeting.replace("World","Javascript");
console.log(newGreeting);

let firstName="John";
let lastName="Doe";
let fullName=firstName+" "+lastName;
console.log(fullName);

let sentence="JavaScript is amazing!";

console.log(sentence.toUpperCase());

console.log(sentence.toLowerCase());

console.log(sentence.indexOf("amazing"));

let extracted=sentence.slice(0,10);
console.log(extracted);

let words=sentence.split(" ");
console.log(words);

let message="   Hello JavaScript!   ";
console.log(message.trim());

let age=25;
let messageTemplate=`I am ${age} years old`;
console.log(messageTemplate);