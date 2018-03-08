var friend = "Chad";

switch (friend) {
  case "Fred":
    console.log("Hey Fred, let's go golfing.");
    break;
  case "Karl":
    console.log("Let's hang.");
    break;
  case "John":
    console.log("Sorry, I'm busy right now.");
    break;
  default:
    console.log("Hey " + friend + ". Can I call you back in a minute?");
}


var dessert = "cheesecake"

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!")
        break;
    default:
    console.log("Not on the menu.")        
}


var temp = 74;

switch (true) {
    case (temp < 0):
    console.log("It's " + temp + " degrees out. Don't go outside.");
    break;
    case (temp >= 0 && temp <= 32):
    console.log("It's", temp, "degrees out. Wear a parka.");
    break;
    case (temp > 32 && temp <= 50):
    console.log("It's", temp, "degrees out. Wear a winter coat.");
    break;
    case (temp > 50 && temp < 75):
    console.log("It's", temp, "degrees out. Wear a jacket.");
    break;
    case (temp >= 75):
    console.log("It's", temp, "degrees out. You can wear shorts.");
    break;
    default:
    console.log("I don't know what to tell you to wear.");
}


var type = {};

switch (typeof type) {
    case 'string':
        console.log("String cheese");
        break;
    case 'number':
        console.log("Numbers are cool");
        break;
    case 'boolean':        
        console.log("Truthiness");
        break;
    default: 
        console.log('Everything else')
}










