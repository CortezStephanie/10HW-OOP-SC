const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("init", () => {
        it("creates new Manager info",
        () => {
            const manager1 = new Manager("robert", 444, "me@me.com", 445);
            expect(manager1.name).toEqual("robert");
            expect(manager1.id).toEqual(444);
            expect(manager1.email).toEqual("me@me.com");
            expect(manager1.officeNumber).toEqual(445);
        })
    })
    describe("getName", () => {
        it("should return the name of the Manager", () => {
            const manager2 = new Manager("robert", 444, "me@me.com", 445);
            const result = manager2.getName();
            expect(result).toEqual("robert");
        })
    })
    describe("getId", () => {
        it("should return the Id of the Manager", () => {
            const manager3 = new Manager("robert", 444, "me@me.com", 445);
            const result = manager3.getId();
            expect(result).toEqual(444);
        })
    })
    describe("getEmail", () => {
        it("should return the email of the Manager", () => {
            const manager4 = new Manager("robert", 444, "me@me.com", 445);
            const result = manager4.getEmail();
            expect(result).toEqual("me@me.com");
        })
    })
    describe("getRole", () => {
        it("should return Manager", () => {
            const manager5 = new Manager("robert", 444, "me@me.com", 445);
            const result = manager5.getRole();
            expect(result).toEqual("Manager");
        })
    })
    describe("getOfficeNumber", () => {
        it("should return the office number of the manager", () => {
            const manager6 = new Manager("robert", 444, "me@me.com", 445);
            const result = manager6.getOfficeNumber();
            expect(result).toEqual(445);
        })
    })
});