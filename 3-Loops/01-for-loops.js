//The For Statement Loop repeats until a specified condition is FALSE.


for ( var i = 1/*variable/index section*/; i <= 10/*conditional section*/;i++/*increment section*/){
    console.log("Number:", i);
}

//Practice
for(var i = 0; i <= 50; i+=5){
    console.log(i);
}

for (var i = 20; i > 1; i--){
    console.log(i);
}

//write a for loop that starts at 3, and increments by 5, but doesnt go over 30
for(var i=3;i<30;i+=5){
    console.log(i);}


for(var i=0; i <10; i++){
    console.log(i);
}    


for(var i=0; i <=20; i+=2){
    console.log(i);
}


var name = 'Kenn';

for(var i = 0; i < name.length; i++){
    console.log(name[i]);
}


var name = 'Tracy';

for(var i = name.length - 1; i>=0; i--){
    console.log(name[i]);
}


let total = 0;
for(let i = 1; i <= 50; i++){
    total += i;
}
console.log(total);


//Likely be asked this question for technical interview
//FizzBuzz

//Answer one
let f = 1;
for (let f = 1; f<= 100; f++){
    switch (true) {
        case (f % 5 == 0):
            console.log("Fizz");
        case (f % 3) == 0:
            console.log("Fizz");
        case (f % 5 && f % 3 == 0):
            console.log("FizzBuzz");
        default:
            console.log(f);
    }
}


//Answer two
var fb = 10;
if (fb % 3 == 0 && fb % 5 == 0) {
  console.log('fizzbuzz');
} else if (fb % 5 == 0) {
  console.log('fizz');
} else if (fb % 3 == 0) {
  console.log('buzz');
} else {
  console.log('nothing');
}



//Answer three

function fizzBuzz() {  
  for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      console.log('FizzBuzz');
    }
    else if ( i % 3 == 0 ) {
      console.log('Fizz');
    }
    else if ( i % 5 == 0 ) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}
fizzBuzz();




