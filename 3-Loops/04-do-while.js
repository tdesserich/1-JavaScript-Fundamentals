//The do...while statement loop repeats until a specified condition comes back as FALSE.

//do while loops

var i = 0; 
do /* do */ {
  i += 1; /* statement */
  console.log(i);
} while (i < 5); /* while (condition) */

// Practice

var text = "";
var i = 0;

do { 
  i++;
  text += "The number is: " + i;
} while (i < 10); // "The number is: 0", "The number is: 1", ... "The number is: 10"
console.log(text);


var x = 3
do {
  console.log(x);
  x *= 3;
} while (x < 100);





