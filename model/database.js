var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:root@localhost:5432/locator');

module.exports = db;
