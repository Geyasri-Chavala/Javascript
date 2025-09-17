// Web Storage API
// localStorage and sessionStorage


// localStorage data persists even after the browser is closed- permanent storage
// sessionStorage data is cleared when the page session ends- temporary storage


// local storage
localStorage.setItem("name", "Geya");
sessionStorage.setItem("age", "22");
console.log(localStorage.getItem("name"));
console.log(sessionStorage.getItem("age")); 
localStorage.removeItem("age");


//session storage
sessionStorage.setItem("city", "Andhra Pradesh");
sessionStorage.setItem("pincode", 112233);
console.log(sessionStorage.getItem("city"));
console.log(sessionStorage.getItem("pincode"));
sesssionstorage.clear(); // clear all the data in session storage
