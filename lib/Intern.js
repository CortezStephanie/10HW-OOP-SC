const Employee =require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, officeNumber, school){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.school = school
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern

