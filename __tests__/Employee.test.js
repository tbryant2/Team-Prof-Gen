const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const now = new Employee();
    expect(typeof (now)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Travis";
    const now = new Employee(name);
    expect(now.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 10;
    const now = new Employee("Travis", testValue);
    expect(now.id).toBe(testValue);

});

test("Can set email via constructor argument", () => {
    const testValue = "test@gmail.com";
    const now = new Employee("Travis", 10, testValue);
    expect(now.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Travis";
    const now = new Employee(testValue);
    expect(now.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 10;
    const now = new Employee("Travis", testValue);
    expect(now.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@gmail.com";
    const now = new Employee("Travis", 10, testValue);
    expect(now.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const now = new Employee("Travis", 10, "test@gmail.com", "Employee");
    expect(now.getRole()).toBe(testValue);
});