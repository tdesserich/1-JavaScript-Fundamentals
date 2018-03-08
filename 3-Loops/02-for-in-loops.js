// // for in loops

// //When we use for...of, we get the value of the items in our array printed out. This is usually what you want when iterating over an array, 
// //so for now keep in your mind that "for of" is useful for things like arrays, and "for in" is useful for objects.

// for (var i /*variable section*/ in obj /*object section*/) {
//     console.log(i) /*statement*/
//   }
  
//   //Write a for in loop that capitalizes the first letter of studentName
  
//   var studentName = 'paul';
//   var capSN = '';
//   for (var n in studentName) {
//     if (n == 0) {
//           capSN = studentName[n].toUpperCase();
//       } else {
//           capSN += studentName[n];
//       }
//   }



//   // cat example

// var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

// for (var cat in catArray){
//   console.log(cat, 'says meow');
// }

// // this results in 0 says meow
// // 1 says meow
// // 2 says meow
// // 3 says meow
// // 4 says meow



var student = {
  name: "Peter",
  awesome: true,
  degree: "JavaScript",
  week: 1
}

for (var item in student) {
  console.log(student[item]);
}


var studentName = 'traCy';
var capSN = '';

for (var n in studentName){
  if (n == 0) {
    capSN = studentName[n].toLocaleUpperCase();
  } else {
    capSN +=studentName[n].toLowerCase();
  }
}
console.log(capSN);



