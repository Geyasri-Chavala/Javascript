
function myName(){
      console.log("My name is Geya" );
}
setTimeout(myName, 5000); // default function in js will get executed after 5 seconds

function setMyName(callbackFn){
    callbackFn();
}

setMyName(myName)