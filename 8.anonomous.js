// anonmous function  


var test = function(){
    // console.log("hello word");
    let status = "hello word";
    console.log(status);
}


//calling the anonmous function
test();




//Define the anonmous function...
var test1 = function(parma1 , param2){
    // console.log("hello word");
    // let status = parma1;
    // let othermessage = param2;

    console.log(parma1);
    console.log(param2);
}



//prepare teh iife
(
    function(param1 , age){
        console.log("hello world 1");
        console.log("hello world 2");
        console.log("hello world 3");
        console.log(param1);
        console.log(age);
    }
)("hello world 4", 20);


