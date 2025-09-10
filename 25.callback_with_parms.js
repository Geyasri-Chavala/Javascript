 // Named function with parameters and callback function

 //Main function

function greetUser(name, callback) {
    callback(name);
}

//Callback function
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
//calling the main function and passing the callback function as an argument

   greetUser("Geya", sayHello);

         

   //anonymous function as a callback

   function greetUser(name, callback) {
    callback(name);
}

greetUser("Geya", function(name) {
    console.log("Hi, " + name + "! Welcome!");
});



//Arrow function as a callback

function greetUser(name, callback) {  
    callback(name);
}   

greetUser("Geya", (name) => {
    console.log("Hey, " + name + "! How are you?");
});

