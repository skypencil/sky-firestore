[![Build Status](https://travis-ci.org/skypencil/sky-firestore.svg?branch=master)](https://travis-ci.org/skypencil/sky-firestore)

```shell
npm i sky-firestore
```

In your JavaScript file:

```javascript
var initFirebase = require("sky-firestore").initFirebase
var createMap = require("sky-firestore").createMap
```

Create your own Firebase project and get your credentials:
1. Go to firebase console.
2. Settings
3. General
4. Click on the web icon (</>)
5. copy the config object.

```javascript
var config = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "YOUR_URL",
    projectId: "YOUR_PROJECTURL",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_ID"
  };
```

Initiate your firebase project by passing your configuration object to the `initFirebase()` function:

```javascript
initFirebase(config);
```

1. `CreateMap()`
Creats a collection with a document inside that has a map (key-value paired object) inside.

```javascript
var obj= {
    name: John,
    lastName: Doe,
    dob: "1/1/2001"
}

createMap("collectionName", "documentName", "mapName", obj)

```

Firebase Data Structuring Rules:
1. Documents have limits: 
    - 1 mb of data per document
    - Can't have more than ~20,000 fields (nested fields count as well)
    - 1 write per second (avoid having multiple users write in one document)
2. Cant retrieve a partial document:
    - entire document is downloaded when called from a client sdk (another reason to keep the documents small)
3. queries are shallow:
    - subcollections aren't retrieved.
4. queries find documents in a single collection.
5. You are billed per reads