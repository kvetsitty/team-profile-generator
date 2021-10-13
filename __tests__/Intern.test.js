const Intern = require('../lib/Intern');

test("Sets school in object", () => {
    const school = "2university";
    const intern = new Intern("John", "22", "john@fakeemail.com", school);
    expect(intern.school).toBe(school);
})

test("getSchool() returns the school", () => {
     const school = "2university";
     const intern = new Intern("John", "22", "john@fakeemail.com", school);
     expect(intern.getSchool()).toBe("2university");
})

test("getRole() returns Intern", () => {
    const role = "Intern";
    const intern = new Intern("John", "22", "john@fakeemail.com");
    expect(intern.getRole()).toBe(role)
})