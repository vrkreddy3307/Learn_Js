/*
1. Create a separate file called app with the extension .js.
2. Within the .js file, add some JavaScript code.
3. Link to the separate .js file within the HTML file you created in Practice
exercise 1.2.
4. Open the HTML file within your browser and check to see whether the
JavaScript code ran properly.
*/
console.log(" hi this is rakesh, here im to learn js");
alert("from external file");

// I'm a single line comment
// console.log("single line comment, not logged");
/* I'm a multi-line comment. Whatever is between the slash asterisk and
the asterisk slash will not get executed.
console.log("I'm not logged, because I'm a comment");
*/

/**
 Prompt
Another thing we would like to show you here is also a command prompt. It works
very much like an alert, but instead, it takes input from the user. 
 */
let ask = prompt('hi how are you');
console.log(ask);

// Random numbers
var number = Math.random();
console.log(number);