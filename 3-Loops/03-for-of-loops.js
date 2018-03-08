//When we use for...of, we get the value of the items in our array printed out. This is usually what you want when iterating over an array, 
//so for now keep in your mind that "for of" is useful for things like arrays, and "for in" is useful for objects.

//The for...of statement creates a loop that iterates over iterable objects (Array, Map, Set, arguments, etc.). for...of is particularly useful 
//for iterating over other kinds of collections. cannot iterate over objects, so for...in provides the 
//best way to iterate over an object. For of loops were introduced in ES6. They're excellent for iterating over arrays.

// cat example

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (var cat of catArray){
  console.log(cat, 'says meow');
}

// this results in:
// tabby says meow
// british shorthair says meow
// burmese says meow
// maine coon says meow
// rag doll says meow

