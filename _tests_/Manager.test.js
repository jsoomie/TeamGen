 const Manager = require("../lib/Manager");

 // Office numbers
 test("Get office number", () => {
     const value = "1-800-555-5555";
     const event = new Manager("Avon", 24, "simple@wind.com", value);
     expect(event.number).toBe(value);
 })

 test("Get office number method", () => {
     const value = "1-800-555-5555";
     const event = new Manager("Ji-U", 10, "e@e.com", value);
     expect(event.getNumber()).toBe(value);
 })

// Roles
test("Get role", () => {
    const value = "Manager";
    const event = new Manager("Lorraine", 60, "mail@fake.com", 5-555-555-5555);
    expect(event.getRole()).toBe(value);
})