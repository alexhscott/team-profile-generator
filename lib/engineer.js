const employee = require('./employee');

// Engineer information
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        
        this.github = github;
    }

    // Gets engineer's github URL
    getGitHub() {
        return this.github;
    }

    // Inputs the role to be 'Engineer'
    getRole() {
        return 'Engineer';
    }

    // Inserts engineer's information into HTML card
    getHTML() {
        return `
        <div class= "card" style= "width: 18rem;">
            <div class= "card-body">
                <h5 class= "card-title">${this.name}</h5>
                <h6 class= "card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <p class= "card-text">ID: ${this.id}</p>
                <a href= "mailto:${this.email}" class= "card-link">${this.email}</a>
                <a href= "https://github.com/${this.github}" class= "card-link">GitHub</a>
            </div>
        </div>
        `
    };
};

module.exports = engineer;