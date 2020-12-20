import csv
import pymysql as sql
import json
import os
import time 
import random
mydb = sql.Connect(host="localhost",user="root",password="1223",db="SA", autocommit=True)
cur = mydb.cursor()
subjects = ["ATCI","ADP","CNS","DBMS","ME","UNIX","EVS"]
sections = ["A","B","C"]
names = ["doot","doot","arnav","rahul","ajay","devgan","emilia","anna","upasana","raj","vivek",
         "Buffy Herdt","Delpha Lepe","Antoinette Wolfinger","Mariella Felten","Rosalba Lewis","Deana Water",
         "Robt Monterrosa","Allen Matos","Rutha Steve","Lanora Rossin","Amelia Ashmore","Rosalinda Korte",
         "Tisha Steuck","Barbar Corral","Charles Adams","Melida Pulsifer","Alvaro Jorgensen","Vernetta Drucker",
         "Ria Erne","Cyril Berney","Raisa Ammon","Lilian Ronning","Berneice Brockway","Lynelle Formby",
         "Ayesha Tuller","Mika Tocco","Reena Tanguay","Agustin Cochran","Maren Drolet","Andy Hatfield"]
tnames=["Jaimee Romeo","Janet Dubinsky","Allie Greenidge","Donetta Sievert","Oma Fraire"]

# dirname = os.path.dirname(__file__)
# path=os.path.join(dirname,'data.json')
# jsonData = open(path).read()
# jsonObj = json.loads(jsonData)
# keys = jsonObj[0].keys()
# print(keys)
# try:
#     for item in jsonObj:
#         print(item.keys())

#         day = item.get('DAY')
#         eight = item.get('8_00')
#         nine = item.get('9_00')
#         ten = item.get('10_00')
#         eleven = item.get('11_30')
#         twelve = item.get('12_30')
#         two = item.get('2_00')
#         three = item.get('3_00')
#         four = item.get('4_00')
#         section = 'A'
#         print(day,eight,nine,ten,eleven,twelve,two,three,four)
#         cur.execute("INSERT INTO timetable(day, 8_00 ,  9_00 ,  10_00 ,  11_30 ,  12_30 ,  2_00 ,  3_00 ,  4_00 ,section) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",(day,eight,nine,ten,eleven,twelve,two,three,four,section))
#         time.sleep(1)
# finally:
#     print("closing it")
#     mydb.close()

##for putting dummy data in al
try:
    baseUsn="1bi18cs0"
    tid='abc'
    number=0
    for i in range(1,7):
        number=number+1
        
        index = random.randint(1,7)
        randID=tid+str(index)
        finalid=tid+str(i)
        finalUsn = baseUsn+str(i)
        section = sections[random.randint(0,2)]
        #name = names[i]
        #tname = tnames[i] 
        #password = "hallo"
        #print(finalUsn,name,section,password)
        #ME=random.randint(0,41)
        #ATCI=random.randint(0,41)
        #CNS=random.randint(0,41)
        #DBMS=random.randint(0,41)
        #UNIX=random.randint(0,41)
        #ADP=random.randint(0,41)
        #EVS=random.randint(0,41)
        #statement= 'insert into attendancelog values ("{0}",(select current_timestamp()),"{1}","{2}");'.format(finalUsn,section,subjects[random.randint(0,6)])
        #statement='insert into student values ("{0}","{1}","{2}",(select sha2("{3}",256)));'.format(finalUsn,name,section,password)
        #statement='update studentattendance set ME={0},CNS={1},DBMS={2},ATCI={3},ADP={4},UNIX={5},EVS={6} WHERE USN="{7}";'.format(ME,CNS,DBMS,ATCI,ADP,UNIX,EVS,finalUsn)
        #statement='insert into STAFF values ("{0}","{1}",(select sha2("{2}",256)),"{3}");'.format(finalid,tname,password,section)
        statement='insert into classes values("{0}","{1} class(es) of {2} were conducted on the date 1/5/21  for sec {3}");'.format(randID,random.randint(1,2),subjects[random.randint(0,6)],section)

        #time.sleep(random.randint(0,2))
        print(statement)
        cur.execute(statement)
    
except Exception as err:
    print("\n\n\n error is here \n\n\n"+str(err))
finally:
    print("closing it")
    mydb.close()
