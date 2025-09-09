let rule = 0;

while(rule < -1)
{
  console.log("Hello");
  rule = rule + 1;
}



let index = 0
do
{
  console.log("Index is " , index);
  index = index + 1;
}
while(index < -1)


//----------------------------------------------------------------------


let myname = { 
                name: "Geya", 
                course: "JavaScript"  ,
                location : "Andhra Prdesh",
              };

//repeating the object for the keys 

for(let abc in myname){
    console.log("key is " , abc);
    console.log("now" , myname[abc]);
}

let items = ["Veg biriyani", "Manchuria", "Shawarma"];
for(let item of items){
    console.log(item);
    if(item == "Manchuria"){
         console.log("wow! I got my favourite dish it's yummy");
    }
}

