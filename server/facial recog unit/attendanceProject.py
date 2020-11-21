"""last updated by Abdullah shaikh
opencv-contrib-python              4.4.0.40
opencv-python-headless             4.4.0.42
face-recognition                   1.3.0
face-recognition-models            0.3.0

"""
import cv2
import numpy as np
import face_recognition
from datetime import datetime
import pymysql as sql
import pickle
import os
myDB= sql.connect(host ="localhost",
                  user="root",
                  password = "1223",
                  db = "attendance",
                  autocommit =True)
cur = myDB.cursor()

path = 'ImagesAttendance'
images = []
classNames = []
myList = os.listdir(path)
SECTION="A"
BRANCH="CSE"
curSubject=""
#print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])

with open ('encodings', 'rb') as fp:
    encodeListKnown = pickle.load(fp)


def markAttendance(name,subject):
    try:
        cur.execute('insert into attendancelog values ("'+name+'",current_timestamp(),"'+subject+'");')
        print('inserted successfully')
       
    except Exception as e:
        print("error is "+ e)
        print(subject)
        
def checkDuplicate(name):
    try:
        cur.execute('insert into DUPCHECK values ("'+name+'");')
        #created a duplicate checking table that truncates itself when subject/timeslot is changed
        #create table dupcheck (name varchar(10), primary key (name));
        #:)
        print("accepted")
        return True
    except:
        print("duplicated detected")
        return False
    
    
def getSubject():
    global BRANCH,SECTION,curSubject
    now =datetime.now()
    HOURint=8#int(now.strftime('%I'))
    HOUR =str(HOURint)
    MINUTEint=0#(now.strftime('%M'))
    MINUTE =str(MINUTEint)
    DAY="monday"#str(now.strftime("%A"))
    #added seconds parameter to remove the 1 minute window of constant table truncation
    SECOND =00#str(now.strftime("%S"))    
    timeStr=str(HOUR + "_" + MINUTE)
    #print(timeStr)
    if((HOURint != 11 and HOURint !=12 and MINUTEint == 00) or (HOURint ==11 and HOURint ==12 and MINUTEint ==30) and SECOND == 00):
        print("inserted successfully")
        cur.execute('select '+timeStr+' from timetable where timetable.day="'+DAY+'" and branch ="'+BRANCH+'" and section ="'+SECTION+'";')
        curSubject=str(cur.fetchone())
        #----------------------IMPORTANT------------------------------------------------#
        #cur.execute("truncate table dupcheck;")
        #although this works good in real time , our way of testing by giving synthetic and constant values(eg:Seconds/MINUTES = "00") will cause constant truncation.....
        #so please comment out the code above while testing or use real time
        #PS still need to test this system in real time
        #-------------------------------------------------------------------------------#
        print(curSubject)
        return curSubject.split("'")[1]
    if((HOURint == 11 and MINUTEint==range(1,29)) or (HOURint ==1 and MINUTEint == range(31,59))):
        return None # break time
    else:
        return None
    
cap = cv2.VideoCapture(0)
 
while True:
    success, img = cap.read()
    imgS = cv2.resize(img,(0,0),None,0.25,0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
 
    facesCurFrame = face_recognition.face_locations(imgS)
    encodesCurFrame = face_recognition.face_encodings(imgS,facesCurFrame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    for encodeFace,faceLoc in zip(encodesCurFrame,facesCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown,encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown,encodeFace)
        #print(faceDis)
        matchIndex = np.argmin(faceDis)
        Subject = str(getSubject())
        if matches[matchIndex]:
            name = classNames[matchIndex].upper()
            #print(name)
            y1,x2,y2,x1 = faceLoc
            y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
            cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
            cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
            cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
            
            if(checkDuplicate(name)):
                markAttendance(name,Subject)
            else:
                continue
 
    cv2.imshow('Webcam',img)
    cv2.waitKey(1)
cap.release()

# Closes all the frames
cv2.destroyAllWindows()
