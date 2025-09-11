// console.log("Start");

// function task1() {
//     console.log("Task 1 is done");
// }   

// function task2() {
//     console.log("Task 2 is done");
// }

// function task3() {
//     console.log("Task 3 is done");
// }       

// //Asynchronous call

// setTimeout(task1, 2000);  // simulating a task that takes 2 seconds
// setTimeout(task2, 1000);  // simulating a task that takes 1 second
// setTimeout(task3, 3000);  // simulating a task that takes 3 seconds

// console.log("All tasks are scheduled");

//Example of asynchronous call

console.log("start shopping");

setTimeout(() => {
    console.log("Item 1 is delivered");
}, 3000); // simulating a task that takes 3 seconds

setTimeout(() => {
    console.log("Item 2 is delivered");
}, 1000); // simulating a task that takes 1 second

setTimeout(() => {
    console.log("Item 3 is delivered");
}, 2000); // simulating a task that takes 2 seconds

console.log("All items are ordered, waiting for delivery");

