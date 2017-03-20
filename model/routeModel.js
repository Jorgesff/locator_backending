var db  = require('./database.js');

exports.setStatusRoute = (route, status = true)=>{
  return db.query("update routes set is_active = \' "+status+"\' where id_route = \'"+route+"\'").then((data)=>{
    return data;
  }).catch((error)=>{
    return error;
  });
}
