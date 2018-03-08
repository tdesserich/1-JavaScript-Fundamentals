function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "One of the parameters is not a number";
    } else {
        return a + b;
    }
}


//Here we look ahead at functions. Some of this will make more sense when we get there. 
// For now, you should now about the throw keyword. It allows you to take control over exceptions. We call this exception handling.