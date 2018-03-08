//It's important to know that calling the function is what actually performs the act of running the function.

//Declaring the function
function getSquare(number){
    return number * number;
   }
//Calling the function
getSquare(5);



//Recursion function calls itself
var timer = function(seconds){
    if (seconds > 0){
        console.log(seconds);
        return timer(seconds-1);
    }else{
        return seconds;
    }
};

timer(10);