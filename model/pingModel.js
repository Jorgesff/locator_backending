var db  = require('./database');

exports.getCoord = (env,route,pkg) => {
  return db.query("select p.id_route, p.coord_x, p.coord_y, p.coord_z, p.time_log  from pings p, routes r where r.id_env = \'"+env+"\' and  r.id_route = \'"+route+"\' and p.pkg_number =\'"+pkg+"\' ;").then((data) => {
    return data;
  }).catch((error)=>{
    return error;
  });
}
exports.setCoord = (route,pkg,coord_x,coord_y,coord_z) => {
  return db.query("insert into pings(id_route,coord_x,coord_y,coord_z,time_log,pkg_number) values"+
                    "("+route+","+coord_x+","+coord_y+","+coord_z+",now(),"+pkg+");");
}
