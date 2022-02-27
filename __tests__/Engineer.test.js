const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const now = new Engineer("Tom", 3, "test@gmail.com", testValue, "Engineer");
    expect(now.github).tobe(testValue);
}); 

test("getRole() should retrun Eng.", () => {
    const testValue = "Engineer";
    const now = new Engineer("Tom", 3, "test@gmail.com", "GitHubUser", "Engineer");
    expect(now.github).tobe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const now = new Engineer("Tom", 3, "test@gmail.com", testValue, "Engineer");
    expect(now.getGithub()).toBe(testValue);
});