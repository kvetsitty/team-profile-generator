const Employee = require('../lib/Employee');

const employee = new Employee(name, id, email);

test("create an employee object", () => {
    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
});