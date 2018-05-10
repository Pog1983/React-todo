// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['jen', 'cory'];
// var groupB = ['David'];
//
// var final = [3, ...groupA];
//
// console.log(final);

// var person = ['David', 35];
// var personTwo = ['Alex', 33];
//
// function hello (name, age) {
//   return 'Hello ' + name + ', you are ' + age;
// }
//
// console.log(hello(...person));
// console.log(hello(...personTwo));

var names = ['David', 'John'];
var final = ['Steve', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
