import csv
import pymysql as sql
import json
import os
import time 
import random
mydb = sql.Connect(host="localhost",user="test",password="481526",db="attendance", autocommit=True)
cur = mydb.cursor()
subjects = ["ATCI","ADP","CNS","DBMS","ME","UNIX"]
sections = ["A","B","C"]
names = ["doot","bruv","konichiwa","feltu","subaru","emilia","beatrice","bojack","nguyen","oji-chan"]
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
    baseUsn="1bi18cs"
    number=0
    for i in range(1,100):
        number+=1
        for j in range(0,len(subjects)-1):
            index = random.randint(0,len(sections)-1)
            finalUsn = baseUsn+str(number)
            section = sections[index]
            name = names[index] 
            password = "hallo"
            statement= 'insert into attendancelog values ("{0}",(select current_timestamp()),"{1}");'.format(finalUsn,subjects[j])
            # statement='insert into student values ("{0}","{1}","{2}",(select sha2("{3}",256)))'.format(finalUsn,section,name,password)
            print(statement)
            cur.execute(statement)
    
except Exception as err:
    print("\n\n\n error is here \n\n\n"+str(err))
finally:
    print("closing it")
    mydb.close()
