//global context


console.log(this);

this.authors = ["kalidasa, vyasa,"];
this.books = ["mahabharatam, ramayanam"];

this.getbookDetails = function(){
    return books;

}

console.log(this);


var obj = {
    name : "Rabibdranath Tagore",
    DateofBirth : "7th May 1861",
    book : ["Gitanjali","the home and the world","gora"],
    achievements : ["Nobel prize in 1913","composer of national anthem of India"],
    getbookDetails : function(){
        console.log(this);

    }

}

obj.getbookDetails();   