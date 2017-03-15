var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:root@localhost:5432/locator')

exports.getCoord = () => {
  return db.query('select id_ping from pings;').then((data) => {
    return data;
  }).catch((error)=>{
    console.log('error');
  });
}
