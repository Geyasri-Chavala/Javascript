// set of statements is called a function

function firstfunction()
{
    console.log("hello world 1");
    console.log("hello world 2");

}    
 // how to call the function
//firstfunction(); 

//function creation or function declaration
function SecondFunction()
{
    console.log("hello world 1");
    console.log("hello world 2");
}
//secondFunction(); 

function ThirdFunction()
{
   let StudentsList = [
                        {
                        "studentname":"geya",
                        "location"   : "AP",
                        "Aadharcard" : "1234-56789-1111"
                        },
                        {
                        "studentname":"Sri",
                        "location"   : "AP",
                        "Aadharcard" : "1234-56789-2222"
                        }
                      ];
    //let StudentsList = ["Geya" , "Sri"];
    console.log(StudentsList);
}
ThirdFunction();