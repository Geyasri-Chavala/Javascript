
class Student{
    _name = "Unknown";

    getStudentName(){
        return this._name;
    }

    //get set; getter and setter

    //modify
    get name(){
       return this._name.toUpperCase();
    }

    //validation
    set name(studentname){
        if(studentname.length > 2){
            //console.log("YOur name is valid");
            this._name = studentname;
        }
        else{
            window.alert(`Please enter valid name .
                 Student name must contains the more than 3 charcters`);
        }
    }


}

let student = new Student();
//console.log(student._name);  // "Un known"

student.name = "Geya";
console.log(student.name);

