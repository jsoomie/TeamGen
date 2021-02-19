const Employee = require("../lib/Employee");

// Name
test("Name of employee", () => {
    const value = "Jennie";
    const event = new Employee(value);
    expect(event.name).toBe(value);
})

test("Name of employee method", () => {
    const value = "Jisoo";
    const event = new Employee(value);
    expect(event.getName()).toBe(value)
})

// ID
test("ID of employee", () => {
    const value = "0100";
    const event = new Employee("Name", value);
    expect(event.id).toBe(value);
})

test("ID of employee method", () => {
    const value = "100";
    const event = new Employee("Name", value);
    expect(event.getId()).toBe(value);
})

// Email 
test("Email of employee", () => {
    const value = "email@emailprovider.com";
    const event = new Employee("Name", 1, value);
    expect(event.email).toBe(value);
})

test("Email of employee method", () => {
    const value = "emailaddress@emailaddressprovider.com";
    const event = new Employee("Name", 2, value);
    expect(event.getEmail()).toBe(value);
})

// Role
test("Returns 'employee'", () => {
    const value = "Employee";
    const event = new Employee("Name", "ID", "EMAIL");
    expect(event.getRole()).toBe(value);
})
