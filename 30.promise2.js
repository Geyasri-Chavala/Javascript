// using Anonymous function

let myPromise = new Promise(function(resolve, reject) {
     resolve("Helloo Geya, promise resolved successfully");
});

myPromise.then(function(successMessage) {
     console.log(successMessage);
});


// using Arrow function(Lambda function)

let myPromise2 = new Promise((resolve, reject) => 
     resolve("Hello Geya, promise done!"));

myPromise2.then(successMessage => console.log(successMessage));

//call backs

let myPromise3 = new Promise((resolve, reject) => {
     let name = "Geya";

     if(name === "Geya") {
          resolve("success hello " + name);
     } else {
          reject("Error not Geya");

     }
});

myPromise3.then(successMessage => console.log(successMessage))
          .catch(errorMessage => console.log(errorMessage)); 
      
          // Incase if i change the name other than Geya it will get this is not Geya error message