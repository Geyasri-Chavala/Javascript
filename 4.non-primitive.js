var myName = "Geyasri";
var myAge = 22;

console.log (myName); // string
console.log (myAge); // number

// let subjects = {HTMl, CSS, JavaScript};
// console.log(subjects); 

let studentname = ["Geya" ,  "Chavala"];
console.log(studentname);

let isWorking = true;
console.log(isWorking); //boolean   


//Object -> value can be anything
let my_personal_details = {
                   "aadharCardNo" : "1234-9087-9087",
                   "DOB"          : "01-01-1990",
                   "Location"     : "AP",
                   "isMarried"    : true,
                   "Salary"       : 20000.89
                 }
console.log(my_personal_details);
console.log(my_personal_details.Location);



let my_personal_details_1 = {
                   "aadharCardNo" : "1234-9087-9087",
                   "DOB"          : "01-01-1990",
                   "Kids"         : { 
                                      'firstKid' : 'John'
                                    },
                   "Hobbies"      : ["Cricket" , "Chess" , "Reading"]
                 }                 //     0        1          2


console.log(my_personal_details_1);
console.log(my_personal_details_1.Hobbies);        //["Cricket" , "Chess" , "Reading"]
console.log(my_personal_details_1.Hobbies[1]);     //chess

console.log(my_personal_details_1.Kids);          // { 'firstKid' : 'John'},
console.log(my_personal_details_1.Kids.firstKid);