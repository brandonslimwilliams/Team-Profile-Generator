const Employee = require('./employee');


// extend employee constructor
class manager extends Employee {
    constructor (name, id, email, office) {

        super(name, id, email);

        this.office = office;
    }

    getOffice () {
        return this.office;
    }

    getRole () {
        return 'manager';
    }
};

module.exports = manager;