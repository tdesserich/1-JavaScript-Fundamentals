let a = true; //Boolean
console.log(a);


let b = null; //null
console.log(b);


let c; //undefined
console.log(c);


let d = 17; //number
console.log(d);


let e = "Hello World"; //string
console.log(e);


//symbol
const MY_KEY = Symbol();
const obj = {
    [MY_KEY]: 123
};
console.log(obj);
console.log(MY_KEY);


//object
let x = {
    hello: 'test',
    number: 13
};
console.log(x.hello); //'test'
console.log(x.number); //13


var z = "Tracy";
console.log(typeof z); //string
