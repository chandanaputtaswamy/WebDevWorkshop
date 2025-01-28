alert("Hello! Welcome to the Javascript tutorial.");

let userName=prompt("What is your name?");
alert("Hello,"+userName+"! Welcome to the site.");

let userAge=prompt("How old are you?","25");
alert("You are "+userAge+" years old.");

let userResponse=prompt("Do you like JavaScript? (yes/no)");
if(userResponse===null){
    alert("You didn't answer the question.");
}else{
    alert("You said: "+userResponse);
}