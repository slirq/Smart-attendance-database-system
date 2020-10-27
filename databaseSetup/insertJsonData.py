import csv
import pymysql as sql
import json
import os

mydb = sql.Connect(host="localhost",user="root",password="481526",db="Attendance", autocommit=True)
cur = mydb.cursor()
dirname = os.path.dirname(__file__)
path=os.path.join(dirname,'data.json')
jsonData = open(path).read()
jsonObj = json.loads(jsonData)
keys = jsonObj[0].keys()
print(keys)
try:
    for item in jsonObj:
        print(item.keys())

        day = item.get('DAY')
        eight = item.get('8_00')
        nine = item.get('9_00')
        ten = item.get('10_00')
        eleven = item.get('11_30')
        twelve = item.get('12_30')
        two = item.get('2_00')
        three = item.get('3_00')
        four = item.get('4_00')

        print(day,eight,nine,ten,eleven,twelve,two,three,four)
        cur.execute("INSERT INTO timetable(day, 8_00 ,  9_00 ,  10_00 ,  11_30 ,  12_30 ,  2_00 ,  3_00 ,  4_00 ) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)",(day,eight,nine,ten,eleven,twelve,two,three,four))
finally:
    print("closing it")
    mydb.close()