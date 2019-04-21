var assert = require('assert')
var chai = require("chai")
var expect = chai.expect;

var createMap = require("../index").createMap


describe("createMap", function () {
        it("should put testObj in testCollection/testUser/testMapName/ firestore with a promise", function (done) {
            var testObj = {
                dob: "mochaDate",
                firstname: "mochaFirstName",
                gender: "mochaGender",
                lastname: "mochaLastName",
                nickname: "mochaNickName",
                pick: "mochaUrl"
            }
            
            createMap("testCollection", "testUser", "testMapName", testObj).then((result) => {
                expect(result).to.equal("Success!");
                done();
            })
        })
});

