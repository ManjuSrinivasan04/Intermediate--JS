let str = "Hi,Good Morning! Have a Nice day!";

//String methods
console.log(str.length); //32
console.log(str.indexOf("a")); //18
console.log(str.lastIndexOf("Have")); //17
console.log(str.indexOf("have")); //-1
console.log(str.indexOf("Good",2)); //3
console.log(str.lastIndexOf("a",19)); //18
console.log(str.search("Nice")); //24
console.log(str.split('!')); //["Hi,Good Morning", " Have a Nice day", ""]
console.log(str.slice(3,21)); //Good Morning! Have
console.log(str.substring(-3,17)); //Hi,Good Morning! 
console.log(str.substr(15,5)); //! Hav
console.log(str.repeat(3)); //Hi,Good Morning! Have a Nice day!Hi,Good Morning! Have a Nice day!Hi,Good Morning! Have a Nice day!
console.log(str.replace(/!/i," Manju")); //Hi,Good Morning Manju Have a Nice day!
console.log(str.replace("Morning","Afternoon")); //Hi,Good Afternoon! Have a Nice day!
console.log(str.replace(/!/g,"!!")); //Hi,Good Morning!! Have a Nice day!!
console.log(str.toUpperCase()); //HI,GOOD MORNING! HAVE A NICE DAY!
console.log(str.toLowerCase()); //hi,good morning! have a nice day!
console.log(str.concat("Had Your Breakfast ? ")); //Hi,Good Morning! Have a Nice day!Had Your Breakfast ? 

let string = " Hello Welcome ";

console.log(string.trim()); //Hello Welcome
console.log(string.charAt(2)); //e
console.log(string.charCodeAt(3)); //108 - UTF-16 code of  l
console.log(string.length); //15
console.log(string[1]); //H



