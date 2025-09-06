var myName = "geyasri"; 
var stringLengn = myName.length
console.log(stringLengn);



var myName1 = "geya";
var upperCaseMyName1 = myName.toUpperCase();
console.log(upperCaseMyName1);



var myName2 = "GEYA SRI";
var lowerCaseMyName2 = myName2.toLowerCase();
console.log(lowerCaseMyName2);


var myName3 = "GeyasrI";
var lowerCaseMyName3 = myName3.toLowerCase();
console.log(lowerCaseMyName3);



//example concat


var firstString = "abcd";

var secondString = " world";

var finalString = firstString.concat(secondString);
console.log(finalString);

var indexOfB = firstString.indexOf("z")  
console.log(indexOfB);


// object , array and function

var studnet = {
     sName          : "Geya Sri",
     dateOfbirth    : "11-11-1111",   
     subjects       : ["Html" , "CSS", "Javascript"],
     getStuLocatoin : function(){
                          return "andhra Pradesh";
                      }
                    }
