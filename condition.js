let age=15;
if(age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}
let time=21;
if(time<12){
    console.log("Good Morning!");
}else if(time<18){
    console.log("Good Afternoon!");
}else{
    console.log("Good Evening!");
}

let number=21;
let result=(number%2==0)?"Even":"Odd";
console.log(result);

let fruit="kjhj";
switch(fruit){
    case "apple":
        console.log("You choose an apple.");
        break;
    case "banana":
        console.log("You choose a banana.");
        break;
    default:
        console.log("You chose something else.")
}