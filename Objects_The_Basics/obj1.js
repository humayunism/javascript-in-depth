// An object in JavaScript is a collection of properties, where each property is defined as a key-value pair. The key is a string (or symbol) that serves as the name of the property, and the value can be any data type, including another object.
//Who has properties like verb, noun, adjective, etc.

// Example of an object representing a person
// property describes a feature or character
//Method describe an action

let humayun = {
    name: "Humayun",
    age: 30,
    occupation: "Software Developer",
    hobbies: ["coding", "gaming", "traveling"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    wake: function() {
        console.log(this.name + " is waking up at.");
    },
    sleep: function() {
        console.log(this.name + " is sleeping.");
    }
}

// here name ,age, occupation, hobbies are properties of the object humayun
// and greet, wake, sleep are methods of the object humayun

// Accessing properties
console.log(humayun.name); // Output: Humayun
console.log(humayun.age); // Output: 30
console.log(humayun.occupation); // Output: Software Developer
console.log(humayun.hobbies); // Output: ["coding", "gaming", "traveling"]

// Calling methods
humayun.greet(); // Output: Hello, my name is Humayun
humayun.wake(); // Output: Humayun is waking up.
humayun.sleep(); // Output: Humayun is sleeping.