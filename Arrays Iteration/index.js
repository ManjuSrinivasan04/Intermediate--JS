let arr=[1,2,3,4];
arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
  /*
output :
        1 is at index 0 in 1,2,3,4
        2 is at index 1 in 1,2,3,4
        3 is at index 2 in 1,2,3,4
        4 is at index 3 in 1,2,3,4 */

  console.log(arr.includes(1)); //true
  console.log(arr.indexOf(4)); //3
  console.log(arr.lastIndexOf(2)); //1
  console.log(arr.includes(1)); //true
  console.log(arr.indexOf(null)); //-1

  let users = [
    {
        id: 1, 
        name: "John"
    },
    {
        id: 2, 
        name: "Mike"
    },
    {
        id: 3, 
        name: "Mary"
    }
  ];
  
  let user = users.find(item => item.id == 1);
  console.log(user); //{id: 1, name: "John"}
  console.log(user.id); //1
  
  let three = users.filter(item => item.id < 3);
  console.log(three); //{id: 1, name: "John"} {id: 2, name: "Mike"}
  console.log(three.length); //2

  let newUser = ["Hello","Hi"].map(item => item.length);
  console.log(newUser); //[5,2]
  console.log(Array.isArray(newUser)); //true

  let num =[5,22,19,25,34];  
  let result=num.find(x=> x > 20); 
  console.log(result); //22

  let ff=[5,22,19,25,34];  
  var res=num.findIndex(x=>x>30);
  console.log(res); //4

  let arr1 = ["Hi", "Hello", "Hey"]; 
  arr1.forEach(function(val) 
  {  
  console.log(val);
   });  //Hi Hello Hey

let sum = 0;  
let arr2 = [10,18,12,20];  
  
arr2.forEach(function myFunction(element) {  
    sum= sum+element;   
     console.log(sum);  //10 28 40 60
});  

let newArr=[3,2,5,1,7];  
let calci=newArr.reduce(  
(sum,value)=>sum+value,0);  
console.log("Sum: "+calci); //18

let summing = newArr.reduceRight(function(x,y)
{
  return x+y;
})
console.log(summing); //18