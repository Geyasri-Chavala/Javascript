//Block1 - Scope1
let fruit1="apple";
{

//Block2 - Scope2
let fruit2="mango";
{

//Block3 - Scope3
console.log("Scope3" , fruit1);
console.log("Scope3" , fruit2);

let fruit3="banana";
console.log("Scope2" , fruit3);

}
console.log("Scope1" , fruit1);
console.log("Scope1" , fruit2);

}
console.log("Scope1" , fruit1); 
