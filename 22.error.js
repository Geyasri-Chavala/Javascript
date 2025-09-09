let userEmail = "geyasri123gmail.com";  // Missing '@'

try {
    if (!userEmail.includes("@")) {
        throw new Error("Invalid email address. '@' symbol is missing.");
    }

    console.log("Email is valid:", userEmail);


} catch (error) {
    console.log("Validation Error:", error.message);


} finally {
    console.log("Email validation completed.");
}

console.log("Proceeding with user registration...");




// class code ---- custom error

try{
      //sname.toLowerCase();
      let bankName;
      if(bankName){
          bankName = bankName.toUpperCase();
          console.log(bankName);
      }
      else{
          // wantdly i am prepaing the my own error.
          throw new Error("Server is Down.. Please come after few mins...");
      }
}
catch(error){
     console.log(error);
}




