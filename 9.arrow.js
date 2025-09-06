// function showAuthorname(){
//     console.log("rabindranath tagore");

// }

let showAuthorname= ()=>{
    console.log("rabindranath tagore");
}

showAuthorname();


function showAuthordetails(Authorname,DOB,bookname,publisheddate){
    console.log("Authorname");
    console.log("DOB");
    console.log("bookname");
    console.log("publisheddate");


    }
showAuthordetails("rabindranath tagore","7th May 1861","Gitanjali","1913");


var sayhelloFn = (a,b)=>{
    console.log("SayHello");
    console.log(a);
    console.log(b);
}

sayhelloFn(10,20);

setTimeout( ()=>{
    console.log("Test");
},3000);