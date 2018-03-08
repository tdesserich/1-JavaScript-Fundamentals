var firstName = "Tracy";
let lastName = "Desserich";
console.log(firstName);
console.log(lastName);

{ let inside = "inside";
    console.log(inside); }

console.log(inside);    


//The console.log outside of the code block will not print because the let declaration was used for the variable.



function football(){
    //local scope
    let x = 7;
    console.log(x);
}
//global scope

football();

let x = 10;
console.log(x);


//This works if we use var but not it we use let
var count =4;
if(true) {
    var more = 1
}
console.log(count + more);
