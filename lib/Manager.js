const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, title, officeNumber) {
        super(name, id, email, title);
        this.officeNumber = officeNumber;
        this.title = title; 
    }
    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;