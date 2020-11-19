use attendance;
delimiter //
CREATE TRIGGER summarise after insert on attendancelog for each row
begin 
set @subjectTest = new.subject;
IF (@subjectTest='atci') THEN
	UPDATE  totalattendance set totalattendance.atc=totalattendance.atc+1 where totalattendance.usn= new.usn;
 ELSEIF (@subjectTest='me') THEN
	UPDATE  totalattendance set totalattendance.me=totalattendance.me+1 where totalattendance.usn= new.usn;
 ELSEIF (@subjectTest='cns') THEN
 	UPDATE  totalattendance set totalattendance.cns=totalattendance.cns+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='adp') THEN
	UPDATE  totalattendance set totalattendance.adp=totalattendance.adp+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='unix') THEN
	UPDATE  totalattendance set totalattendance.unix=totalattendance.unix+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='dbms') THEN
	UPDATE  totalattendance set totalattendance.dbms=totalattendance.dbms+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='evs') THEN
	UPDATE  totalattendance set totalattendance.evs=totalattendance.evs+1 where totalattendance.usn= new.usn;
end IF; 
end//
