// Promise definition


let myPromise = new Promise((resolve, reject) => {
    let myStatus = true; // for success msg..

    if (myStatus) {
        resolve("Success message");
    } else {
        reject("Fail message");
    }
});


// Handling the Promise

myPromise
    .then((successResult) => {
        console.log(successResult); // This runs if resolved
    })
    .catch((failMessage) => {
        console.log(failMessage);   // This runs if rejected
    });