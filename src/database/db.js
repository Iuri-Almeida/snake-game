const Database = require('sqlite-async');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            score TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);