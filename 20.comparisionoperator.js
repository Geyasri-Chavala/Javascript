// ==, ===, !=,  >, <, >=, <= // Comparison Operators in JavaScript

console.log(12 == 12); //----- true , because values are equal

console.log(12 == 15); // ---- false , because values are not equal 



let number = 12;

console.log(number == 12);//----- true , because values are equal

console.log(number != 12); //---- fasle , because 12 is equal to 12

console.log(number < 12); //---- false , because 12 is not less than 12

console.log(number > 12); //---- false , because 12 is not greater than 12

console.log(number <= 12); //---- true , because here it is less than or equal  means either less than or equal to

console.log(number >= 12); //---- true , because here it is greater than or equal  means either greater than or equal to


//coercison---- means converting one data type to another data type

console.log(12 == '12'); //---- true , because here it is converting string to number and then comparing

console.log(12 === '12');//---- false , because here it is not converting string to number and also checking data type





//using if else with comparison operators

let budget = 5000;

//choose of travel mode based on budget
if(budget >= 10000){
    console.log("We will travel by flight");
}
else if(budget >= 5000){
    console.log("We will travel by train");
}
else if(budget >= 3000){
    console.log("We will travel by bus");
}
else{
    console.log("We will plan a local trip by car");
}