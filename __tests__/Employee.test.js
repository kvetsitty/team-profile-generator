const Employee = require('../lib/Employee');
 

test("Can create employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});