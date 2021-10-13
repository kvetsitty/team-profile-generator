const Engineer = require('../lib/Engineer');

test("Sets github account in object", () => {
    const github = "ibealec";
    const engineer = new Engineer("Alec", "22", "alec@fakeemail.com", github);
    expect(engineer.github).toBe(github);
})