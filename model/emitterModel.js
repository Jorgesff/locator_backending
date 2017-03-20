var db  = require('./database');

exports.getEmitterById = (emitter) => {
  return db.query("select * from emitters where id_emitter = "+emitter).then((data) => {
    return data;
  }).catch((error) => {
    return error;
  })
}

exports.getEmitterByMAC = (name) => {
  return db.query("select * from emitters where mac_addr = \'"+name+"\'").then((data) => {
    return data;
  }).catch((error) => {
    return error;
  })
}
