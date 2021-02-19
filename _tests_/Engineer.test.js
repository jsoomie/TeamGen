const Engineer = require("../lib/Engineer");

// Github
test("Get github", () => {
    const value = "www.github.com";
    const event = new Engineer("Alyx", 100, "e@email.com", value);
    expect(event.github).toBe(value);
})

test("Get github method", () => {
    const value = "user.github.com";
    const event = new Engineer("Gordon", 101, "email@email.com", value);
    expect(event.getGithub()).toBe(value);
})

// Get role
test("Get github role", () => {
    const value = "Engineer";
    const event = new Engineer("Starbuck", 1050, "email@provider.com", "github.com");
    expect(event.getRole()).toBe(value);
})