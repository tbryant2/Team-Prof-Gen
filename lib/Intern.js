const Employee = require("./Employee"); 

class Intern extends Employee {
    constructor(name, id, email, title, school) {
        super(name, id, email, title);
        this.school = school; 
        this.title = title;
    }
    getRole() {
        return this.title
    }
    getSchool() {
        return this.school;
    }
};
module.exports = Intern; 