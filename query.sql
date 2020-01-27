CREATE TABLE IF NOT EXISTS DeviceType(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Name varchar(20) NOT NULL
);

select * from DeviceType;

INSERT INTO DeviceType(Name) 
VALUES ('Termostat');
INSERT INTO DeviceType(Name) 
VALUES ('Svetlo');
INSERT INTO DeviceType(Name) 
VALUES ('Kamera');
INSERT INTO DeviceType(Name) 
VALUES ('Senzor');

CREATE TABLE IF NOT EXISTS Action(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Name varchar(20) NOT NULL
);

select * from action;

INSERT INTO Action(Name) 
VALUES ('ON');
INSERT INTO Action(Name) 
VALUES ('OFF');


CREATE TABLE Scheduler(
	ActionTime time,
    DeviceId int NOT NULL,
    ActionId int NOT NULL,
    FOREIGN KEY (ActionId) REFERENCES Action(Id),
	FOREIGN KEY (DeviceId) REFERENCES Device(Id)
);