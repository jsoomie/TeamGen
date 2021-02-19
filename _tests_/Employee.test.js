const Employee = require("../lib/Employee");

test("Name of employee", () => {
    const name = "Jennie";
    const event = new Employee(name);
    expect(event.name).toBe(name);
})