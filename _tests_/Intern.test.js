const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("init", () => {
        it("should create an instance of an Intern when we call it with the new keyword",
        () => {
            const intern1 = new Intern("robert", 444, "me@me.com", "School");
            expect(intern1.name).toEqual("robert");
            expect(intern1.id).toEqual(444);
            expect(intern1.email).toEqual("me@me.com");
            expect(intern1.school).toEqual("School");
        })
    })
    describe("getName", () => {
        it("should return the name of the Intern instance that was created", () => {
            const intern2 = new Intern("robert", 444,"me@me.com", "School");
            const result = intern2.getName();
            expect(result).toEqual("robert");
        })
    })
    describe("getId", () => {
        it("should return the Id of the Intern instance that was created", () => {
            const intern3 = new Intern("robert", 444, "me@me.com", "School");
            const result = intern3.getId();
            expect(result).toEqual(444);
        })
    })
    describe("getEmail", () => {
        it("should return the email of the Intern instance that was created", () => {
            const intern4 = new Intern("robert", 444, "me@me.com", "School");
            const result = intern4.getEmail();
            expect(result).toEqual("me@me.com");
        })
    })
    describe("getRole", () => {
        it("should return Intern", () => {
            const intern5 = new Intern("robert", 444, "me@me.com", "School");
            const result = intern5.getRole();
            expect(result).toEqual("Intern");
        })
    })
    describe("getSchool", () => {
        it("should return school that Intern instance that was created attended", () => {
            const intern6 = new Intern("robert", 444, "me@me.com", "School");
            const result = intern6.getSchool();
            expect(result).toEqual("School");
        })
    })
});