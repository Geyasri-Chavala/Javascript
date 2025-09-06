

//prototype example




function person(name,age){
    this.name = name;
    this.age = age;
}


person.prototype.sayHello =function() {
    console.log("Hello,my name is " + this.name + " and i am " + this.age + " years old.");
};
let person1=new person("rocky",24);
let person2=new person("chocy",34);

person1.sayHello();
person2.sayHello();















function Car(purchasedate , carowner , location){
     //console.log("Car");
     this.PurchaseDate = purchasedate
     this.CarOwner     = carowner
     this.Location     = location
    }
Car.prototype.getCarInfo = function(){
    //console.log("Car brand is Toyoto and model is camry");
    console.log("from protype is " ,this);
    console.log(this.CarOwner);
    console.log(this.PurchaseDate);//PurchaseDate,CarOwner,Location
}

Car.prototype.getCarLocation = function(){
    console.log(this.Location);
    console.log(this) ;//PurchaseDate,CarOwner,Location

    var johnCar = new Car("Dec 10 , 2020" , "John" , "UK");
johnCar.getCarInfo();
johnCar.getCarLocation();


}