const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("init", () => {
        it("should create an instance of an Engineer when we call it with the new keyword",
        () => {
            const engineer1 = new Engineer("robert", 444, "me@me.com", "robertdinero");
            expect(engineer1.name).toEqual("robert");
            expect(engineer1.id).toEqual(444);
            expect(engineer1.email).toEqual("me@me.com");
            expect(engineer1.gitHub).toEqual("robertdinero");
        })
    })
    describe("getName", () => {
        it("should return the name of the Engineer instance that was created", () => {
            const engineer2 = new Engineer("robert", 444,"me@me.com", "robertdinero");
            const result = engineer2.getName();
            expect(result).toEqual("robert");
        })
    })
    describe("getId", () => {
        it("should return the Id of the Engineer instance that was created", () => {
            const engineer3 = new Engineer("robert", 444, "me@me.com", "robertdinero");
            const result = engineer3.getId();
            expect(result).toEqual(444);
        })
     })
    describe("getEmail", () => {
        it("should return the email of the Engineer instance that was created", () => {
            const engineer4 = new Engineer("robert", 444, "me@me.com", "robertdinero");
            const result = engineer4.getEmail();
            expect(result).toEqual("me@me.com");
        })
    })
    describe("getRole", () => {
        it("should return Engineer", () => {
            const engineer5 = new Engineer("robert", 444, "me@me.com", "robertdinero");
            const result = engineer5.getRole();
            expect(result).toEqual("Engineer");
        })
    })
    describe("getGithub", () => {
        it("should return github username of the Engineer instance that was created", () => {
            const engineer6 = new Engineer("robert", 444, "me@me.com", "robertdinero");
            const result = engineer6.getGithub();
            expect(result).toEqual("robertdinero");
        })
    })
});