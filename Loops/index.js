for (let i = 0; i < 5; i++) {
   let text = "The number is " + i ;
    console.log(text);
  } //The number is 0  The number is 1 (2,3,4)

let person = {fname:"Mike", lname:"John", age:20};
let text = "";
let x;
for (x in person) {
  text += person[x];
}
  console.log(text); //MikeJohn20 

  let friuts=["apple",'orange','grapes'];
  for(let key of friuts)
  {
      console.log(key); //apple orange grapes
  }
  for(let x in friuts)
  {
      console.log(friuts[x]); //apple orange grapes
  }

