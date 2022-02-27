const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "Berklee";
    const now = new Intern("Tom", 3, "test@gmail.com", testValue, "Intern");
    expect(now.github).tobe(testValue);
}); 

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const now = new Intern("Tom", 3, "test@gmail.com", "Berklee", "Intern");
    expect(now.github).tobe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Berklee";
    const now = new Intern("Tom", 3, "test@gmail.com", testValue, "Intern");
    expect(now.getSchool()).toBe(testValue);
});