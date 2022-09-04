// creating constructor for employee

class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returning all inputs
getName () {
    return this.name;
}

gitId () {
    return this.id;
}

getEmail () {
    return this.email;
}

getRole () {
    return 'employee';
}

};

module.exports = employee;

