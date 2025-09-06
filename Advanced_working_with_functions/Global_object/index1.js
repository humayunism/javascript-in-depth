
// The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

// In a browser it is named window, for Node.js it is global, for other environments it may have another name.

// Recently, globalThis was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers.

// We’ll use window here, assuming that our environment is a browser. If your script may run in other environments, it’s better to use globalThis instead.

// All properties of the global object can be accessed directly:

console.log("I am Humayun Kabir");
globalThis.console.log("I am Humayun Kabir");
// both calls work the same way

// That’s because the global object is the default context for code execution. So if a variable or function is not found in the local scope, then the search continues in the global object.    
// For instance, here a variable is created globally, and then accessed from a function:

let userName = "Humayun Kabir"; // global variable  
function showUserName() {
  console.log(userName); // Humayun Kabir
}   
showUserName();

// The same works for functions:    
// in browser varialbes declared with var become properties of the global object. So do function declarations:
// (But not let/const, class, or function expressions.) 
var age = 25; // becomes window.age
function showAge() { // becomes window.showAge
  console.log(age);
}
//If a value is so important that you’d like to make it available globally, write it //directly as a property:

globalThis.myName = "Humayun Kabir"; // create a global variable
console.log(myName); // Humayun Kabir
if (!globalThis.Promise) {
    console.log("your environment doesn't support Promise");
}
else {
    console.log("your environment supports Promise");
}