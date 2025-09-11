// synchronous call

console.log("start");

function firstTask() {
  console.log("First task is done");
}

function secondTask() {
  console.log("Second task is done");
}

function thirdTask() {
  console.log("Third task is done");
}

firstTask();
secondTask();
thirdTask();

console.log("All tasks are completed");


// example for synchronous call

console.log("started to order coffee ");

function ChooseCoffee() {
    console.log("Coffee  chosen is iced latte");
}

function orderCoffee() {
    console.log("Coffee is ordered");
}       

function payFororder() {
    console.log("paid for the order");
}
function receivedmyorder() {
    console.log("received my iced latte");

    //synchronous call
    ChooseCoffee();
    orderCoffee();
    payFororder();
}   receivedmyorder();
console.log("enjoying  my iced latte its was soo good");