const Employee = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id and email address if provided valid arguments", () => {
            const employee = new Employee("Rebecca Smith", 3, "example@example.com");

            expect(employee.name).toEqual("Rebecca Smith");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("example@example.com");
        })
    });

    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Rebecca Smith";
        const expected = {"name": "Rebecca Smith", "id": 1, "email": "example@example.com"};
        
        const result = new Employee(input, 1, "example@example.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "example@example.com";
        const expected = {"name": "First Last", "id": 1, "email": "example@example.com"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});