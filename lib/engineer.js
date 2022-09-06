const Employee = require('./employee');

// extend employee constructor
class engineer extends Employee {
    constructor (name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return 'engineer';
    }
};

module.exports = engineer;