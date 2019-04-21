var firebase = require('firebase')
var firebaseConfig = require("./private-keys/firebase")

var appClient = firebase.initializeApp(firebaseConfig)
var dbClient = appClient.firestore()

function createMap(collectionName, uid, mapName, mapObject) {
    var result = new Promise(function (resolve, reject) {
        dbClient.collection(collectionName).doc(uid).set({
            mapName: mapObject
        }).then(function () {
            resolve("Success!")
        })
        .catch(function (error) {
            reject(error)
        })
    })

    return result;
}

module.exports = {
    createMap: createMap,
}





