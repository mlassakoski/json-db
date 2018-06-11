const Datastore = require('nedb');

let db;

if(!db) {
    db = new Datastore({filename: 'data.db'});
    db.loadDatabase();
    console.log('Database initializaed successfull.')
}

module.exports = db;