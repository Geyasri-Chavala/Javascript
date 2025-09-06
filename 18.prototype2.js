
// class example

var dummyValueOfBankName = "";
function bank(bankname,locatoin){
   //console.log(bank.arguments);
   console.log(this); //window
   //dummyValueOfBankName = bank.arguments[1];
   dummyValueOfBankName = locatoin;
}
bank("hdfc","andhra");
console.log(dummyValueOfBankName); // "hdfc"..
//bankname
//console.log(bank.name);
//console.log(bank.length);
//console.log(bank.arguments);