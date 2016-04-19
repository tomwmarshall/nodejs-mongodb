var db = require('mongodb');
var mongoClient = db.MongoClient;

var url = "mongodb://localhost:27017/testDB";

mongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log('Connected to: ' + url);

        // work on database

        db.close();
    }
});