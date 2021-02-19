const Employee = require("./Employee");

// Creates extended class
class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }
    // Gets number of the office
    getNumber() {
        return this.number;
    }
    // Gets role of this position
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;