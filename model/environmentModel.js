var db  = require('./database');

exports.getEnvById = (env) => {
  return db.query("select * from environment where id_env = "+env).then((data) => {
    return data;
  }).catch((error) => {
    return error;
  })
}

exports.getEnvByName = (name) => {
  return db.query("select * from environment where description = \'"+name+"\'").then((data) => {
    return data;
  }).catch((error) => {
    return error;
  })
}
