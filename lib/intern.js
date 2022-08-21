const employee = require('./employee');

// Intern information
class intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    // Gets intern's school
    getSchool() {
        return this.school;
    }

    // Inputs role to be 'Intern'
    getRole() {
        return 'Intern';
    }

    // Inserts intern's information into HTML card
    getHTML() {
        return `
        <div class= "card" style= "width: 18rem;">
            <div class= "card-body">
                <h5 class= "card-title">${this.name}</h5>
                <h6 class= "card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <p class= "card-text">ID: ${this.id}</p>
                <a href= "mailto:${this.email}" class= "card-link">${this.email}</a>
                <p class= "card-text">School: ${this.school}</p>
            </div>
        </div>
        `
    };
};

module.export = intern;