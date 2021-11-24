const Employee =require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, officeNumber, gitHub){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.gitHub = gitHub
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer 

