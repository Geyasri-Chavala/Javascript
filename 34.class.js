// class code for understanding...


class Student{

    _sname;   //field
    _age;
    
    constructor(sname , studentage){
      this._sname = sname;
      this._age   = studentage
    }


    getStudentDetails(){
        return `Studentname is ${this._sname}  and student age is ${this._age}`
    }

}

let student = new Student("John smith" , 20);
let sDetails = student.getStudentDetails();
console.log(sDetails);


let student1  = new Student("Robert Junior" , 18);
let sDetails1 = student1.getStudentDetails();
console.log(sDetails1);


let student2  = new Student("Rabindra" , 16);
let sDetails2 = student2.getStudentDetails();
console.log(sDetails2);
