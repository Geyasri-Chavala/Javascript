  
  // Async Function
    async function getMovieDetails(){
        return{title:  "kotha loakh ch-1", year: 2025};
    }

      // using .then()
      let movie = getMovieDetails();

        movie.then((details) => {
            console.log("Movie(then): ", details.title, "-year:", details.year);
        });

        // using await
        async function showMovieDetails(){
            let movie = await getMovieDetails();
            console.log("Movie(await): ", movie.title, "-year:", movie.year);   

        }  

        showMovieDetails();



// another example class code

        async function getAuthorDetails(){
    return "Arudanrhi rai";  //instead of the string let me promise
}

console.log(getAuthorDetails);     // function wil print

let author = getAuthorDetails();

author.then((authorname)=>{
     //console.log(authorname);
     document.writeln(authorname);
})



console.log(author);   // statements executon

