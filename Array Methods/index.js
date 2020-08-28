let fruits = ["Pineapple", "Orange", "Apple", "Banana"];

//Array Methods
console.log(fruits.toString()); //Pineapple,Orange,Apple,Banana
console.log(fruits.join(" ** ")); //Pineapple ** Orange ** Apple ** Banana
console.log(fruits.pop()); //Banana

fruits.push("Watermelon");

console.log(fruits); //["Pineapple", "Orange", "Apple", "Watermelon"]
console.log(fruits.shift()); //Pineapple

fruits.unshift("Kiwi")

console.log(fruits); //["Kiwi", "Orange", "Apple", "Watermelon"]

fruits[4]="Grapes";

console.log(fruits); //["Kiwi", "Orange", "Apple", "Watermelon", "Grapes"]
console.log(fruits.length); //5

fruits[fruits.length]='Muskmelon';

console.log(fruits); //["Kiwi", "Orange", "Apple", "Watermelon", "Grapes", "Muskmelon"]

fruits.splice(2, 0, "Tommato","Potato");

console.log(fruits); //["Kiwi", "Orange", "Tommato", "Potato", "Apple", "Watermelon", "Grapes", "Muskmelon"]
console.log(fruits.sort()); //["Apple", "Grapes", "Kiwi", "Muskmelon", "Orange", "Potato", "Tommato", "Watermelon"]
console.log(fruits.reverse()); //["Watermelon", "Tommato", "Potato", "Orange", "Muskmelon", "Kiwi", "Grapes", "Apple"]

let veg=['Carrot','Beetroot'];
let spices=['Mushrrom','chilli'];

console.log(spices.concat(veg)); //["Mushrrom", "chilli", "Carrot", "Beetroot"]

let num=[1,6,0,4];
console.log(num.sort()); //[0, 1, 4, 6]

let a1 = [44, 50, 2, 8, 22, 16];
a1.sort(function(a, b){return b - a});
console.log(a1);//[50, 44, 22, 16, 8, 2]

