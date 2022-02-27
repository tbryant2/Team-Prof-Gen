const Employee = require("./Employee"); 

class Engineer extends Employee {
    constructor(name, id, email, title, github) {
        super(name, id, email, title);
        this.github = github; 
        this.title = title; 
    }
    getGithub() {
        return this.github 
    }
    getRole() {
        return this.title
    }
};

module.exports = Engineer; 