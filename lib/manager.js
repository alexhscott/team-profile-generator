const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = this.officeNumber
    }

    // Gets Manager's office number
    getOfficeNumber() {
    return this.officeNumber;
    }

    // Inputs role to be 'Manager'
    getRole() {
        return 'Manager'
    }

    // Inserts manager's information into HTML card
    getHTML() {
        return `
        <div class= "card" style= "width: 18rem;">
            <div class= "card-body">
                <h5 class= "card-title">${this.name}</h5>
                <h6 class= "card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <p class= "card-text">ID: ${this.id}</p>
                <a href= "mailto:${this.email}" class= "card-link">${this.email}</a>
                <p class= "card-text">Office Number: ${this.getOfficeNumber()}</p>
            </div>
        </div>
        `
    }
};

module.exports = manager;