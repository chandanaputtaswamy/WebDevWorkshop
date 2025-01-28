let fruits=["Apple","Banana","Orange","Mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
fruits[1]="Strawberry";
console.log(fruits);
console.log(fruits.length);
fruits.push("Pineapple");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Blueberry");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("Looping through array:");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}