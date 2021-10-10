const Manager = require("../lib/Manager");

test("set office number", () => {
    const number = "888";
    const manager = new Manager("jared", "1", "jared@fakeemail.com", number);
    expect(manager.officeNumber).toBe(number);
});