var assert = require("assert");

var sampleFunction = require("../index").sampleFunction 

describe("index", function () {
    context("sampleFunction", function () {
        it("should add 2 to 2 and give 4", function () {
            assert.equal(sampleFunction(2), 4);
        })
    })
})