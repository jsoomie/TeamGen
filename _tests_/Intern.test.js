const Intern = require("../lib/Intern");

// School
test("Get school", () => {
    const value = "UCLA";
    const event = new Intern("Alloy", 1001, "email@email.com", value);
    expect(event.school).toBe(value);
})

test("Get school method", () => {
    const value = "WestGate";
    const event = new Intern("Kat", 201, "email@westgate.com", value);
    expect(event.getSchool()).toBe(value);
})

// Get role
test("Get github role", () => {
    const value = "Intern";
    const event = new Intern("Lisa", 1995, "email@provider.com", "Rockforth");
    expect(event.getRole()).toBe(value);
})