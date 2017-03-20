var db  = require('./database.js');

exports.setStatusRoute = (route, status = true)=>{
  return db.query("update routes set is_active = \' "+status+"\' where id_route = \'"+route+"\'").then((data)=>{
    return data;
  }).catch((error)=>{
    return error;
  });
}

exports.getRouteById = (route) => {
  return db.query("select * from routes where id_route = "+route).then((data) => {
    return data;
  }).catch((error) => {
    return error;
  })
}

exports.getRouteByName = (name) => {
  return db.query("select * from routes where description = "+name).then((data) => {
    return data;
  }).catch((error) => {
    return error;
  });
}
