create table Environment(
	id_env integer,
	description varchar,
	is_active boolean,
	is_valid boolean,
	route_count integer,
	constraint pk_env primary key (id_env)
);

CREATE TABLE Routes(
	id_route integer,
	id_env integer,
	description varchar,
	is_active boolean,
	is_valid boolean,
	pkgs_count integer,
	constraint pk_routes primary key (id_route),
	constraint fk_environment_id_env foreign key (id_env) references Environment(id_env)
);

CREATE TABLE Pings(
	id_ping serial,
	id_route integer,
	coord_x integer,
	coord_y integer,
	coord_z integer,
	time_log timestamp,
	pkg_number integer,
	constraint pk_ping primary key (id_ping),
	constraint fk_routes_id_route foreign key (id_route) references Routes(id_route)
);
create table emitters(
	id_emitter integer,
	id_env integer,
	em_number integer
	mac_addr varchar,
	constraint pk_emmiters primary key(id_emitter),
	constraint fk_enviroment_id_env foreign key(id_env)references environment(id_env)
);
-- inserts for test
insert into environment values(1,'teste',true,true);

insert into routes values(1,1,'route teste',true,true,1);

	insert into pings(id_route,coord_x,coord_y,coord_z,time_log,pkg_number) values
			(1,25,2,300,now(),1),
			(1,22,4,303,now(),1),
			(1,19,5,307,now(),1),
			(1,15,7,320,now(),1),
			(1,12,8,322,now(),1),
			(1,11,23,340,now(),1);

insert into emitters values (1,1,1,'test_mac_addrs');
