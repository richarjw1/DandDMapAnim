var index = require("../index");
var chai = require("chai");
var expect = chai.expect;
describe("index.js tests", function() {
    it("addTwoNumbers returns a number", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
    it("addTwoNumbers can add 1 + 2", function() {
        expect(index.addTwoNumbers(1,2)).to.equal(3);
    });
    it("addTwoNumbers can add -3 + -2", function() {
        expect(index.addTwoNumbers(-3,-2)).to.equal(-5);
    });
    it("addTwoNumbers can add 1234567 + 123456789", function() {
        expect(index.addTwoNumbers(1234567,123456789)).to.equal(124691356);
    });
});