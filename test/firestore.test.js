var assert = require('assert')
var chai = require("chai")
var expect = chai.expect;
var config = require("../private-keys/firebase")

var dotenv = require("dotenv")
dotenv.config();

var initFirebase = require("../index").initFirebase
var createMap = require("../index").createMap

initFirebase(config)


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

