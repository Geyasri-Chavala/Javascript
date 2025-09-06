var signalName = "wi-fi";
//localblock1

function Room1()
{
    let room1FanStatus = "Very Fast";
    console.log("Room1" ,room1FanStatus);
    console.log("Room1 - Global scope" , signalName);
}

//localblock2
function Room2()
{
   // console.log("Room1" ,room1FanStatus);
    let room2FanStatus = "Very Slow";
    console.log("Room2", room2FanStatus);
    console.log("Room2 - Global scope" , signalName);
}

Room1();
Room2();