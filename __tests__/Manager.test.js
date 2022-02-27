const Manager = require("../lib/Manager");

test("Can set officenum via constructor argument", () => {
    const testValue = 50;
    const now = new Manager("Tom", 3, "test@gmail.com", testValue, "Manager");
    expect(now.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const now = new Manager("Tom", 3, "test@gmail.com", 50, "Manager");
    expect(now.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 50;
    const now = new Manager("Tom", 3, "test@gmail.com", testValue, "Manager");
    expect(now.getOfficeNumber()).toBe(testValue);
});