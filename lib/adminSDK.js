var admin = require('firebase-admin');

var appAdmin = admin.initializeApp({
    credential: admin.credential.cert("./private-keys/service_account.json"),
    databaseURL: "https://restrush-58ae0.firebaseio.com"
});

var dbAdmin = appAdmin.firestore()

function clientCreateUser(collectionName, uid) {

    return dbAdmin.collection(collectionName).doc(uid).set({
        profile: {
            dob: "06/12/2015",
            firstname: "johny",
            gender: "male",
            lastname: "clutch",
            nickname: "johny boy",
            pick: "url to johny boy"
        }
    })
        .then(function (docRef) {
            console.log("document written with ID:", docRef);
        })
        .catch(function (error) {
            console.log("Error adding document:", error);
        })

}