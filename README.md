[![Build Status](https://travis-ci.org/skypencil/sky-firestore.svg?branch=master)](https://travis-ci.org/skypencil/sky-firestore)

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