//A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's 
//parameters. To say it again, a parameter is the variable in the declaration of the function. An argument is the actual value of 
//this variable that gets passed to function.


function demoFunction(x, y) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

demoFunction(1, 2);