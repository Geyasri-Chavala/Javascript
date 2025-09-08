// logical operators 

// AND operator (&&)
// OR operator (||)


//AND operator (&&)

let myDOB = 12;
let myName = "Geya";

console.log(myDOB = 12 && myName == "Geya"); // -------true && true  =  true
console.log(myDOB = 12 && myName == "Sri"); // --------true && false  =  false
console.log(myDOB = 15 && myName == "Geya"); // -------false && true =  false
console.log(myDOB = 15 && myName == "Sri"); // --------false && false =  false

if(myDOB = 12 && myName == "Geya"){
    console.log("my date of birth is 12 and my name is Geya");
}   
else{
    console.log("condition is false");
}


//OR operator (||)

console.log(myDOB = 12 || myName == "Geya"); // -------true || true  =  true
console.log(myDOB = 12 || myName == "Sri"); // --------true || false  =  true
console.log(myDOB = 15 || myName == "Geya"); // -------false || true =  true
console.log(myDOB = 15 || myName == "Sri"); // --------false || false =  false      

if(myDOB == 12 || myName == "Sri"){
    console.log("my date of birth is 12 or my name is Geya");
}
else{
    console.log("condition is false");
}   