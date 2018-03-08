//Variables declared using the var keyword (or without using a keyword at all) are hoisted, or lifted, to the top of the code 
//in which it is scoped when the code is compiled. Simply put, it jumps to the top of wherever it is accessible throughout the code. 
//Hoisting means the code is read twice - but it is looking at left hand values the first time.
console.log(x);
var x = 7;



var x = 15;
console.log(x); //15
{
    var y = 12;
    console.log(y); //12
}
console.log(y); //12

//This works because the var declaration was used. 




let x = 5;
console.log(x); //5
{
    let x = 7;
    console.log(x); //7
}
console.log(x); //5




const firstName = "Tracy";
let lastName = "Desserich";
var middleName = "Nealy";

{ let city = "Indianapolis"
  let state = "Indiana"}

  console.log(firstName);
  console.log(lastName);
  console.log(middleName);
  console.log(city); //won't print
  console.log(state); //won't print