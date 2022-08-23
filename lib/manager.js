const Employee = require('./employee');


// Manager info
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";

        // Inputs Manager info into card
        this.managerCard =
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card manager'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>${name}</h4>
                        <h5 class='card-title text-center'><i class="fas fa-tasks"></i>&nbsp Manager</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp ${id}</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:${email}">${email}</a></li>
                                <li class='list-group-item'>OFFICE NUMBER:&nbsp ${this.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
    }

    // Retrieves Manager's office number
    getOfficeNumber() { return this.officeNumber };

    // Inputs role to Manager
    getRole() { return this.role };
}

module.exports = Manager;