"""last updated by Abdullah shaikh
opencv-contrib-python              4.4.0.40
opencv-python-headless             4.4.0.42
face-recognition                   1.3.0
face-recognition-models            0.3.0

"""
import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime,timedelta
import pymysql as sql

myDB= sql.connect(host ="localhost",
                  user="root",
                  password = "1223",
                  db = "attendance",
                  autocommit =True)
cur = myDB.cursor()

oldname=''
oldSubject=''
path = 'ImagesAttendance'
images = []
classNames = []
myList = os.listdir(path)
print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
print(classNames)


def markAttendance(name,subject):
    try:
        cur.execute('insert into attendancelog values ("'+name+'",current_timestamp(),"'+subject+'");')
       
    except:
       
        print("error!! connection failed!!")
        print(subject)

def getSubject():
    now =datetime.now()
    HOUR=str(now.strftime('%H'))
    MINUTE=str(now.strftime('%M'))
    DAY=str(now.strftime("%A"))
    timeStr=str(HOUR + "_" + MINUTE)
    print(now.strftime("%A   %H:%M"))
    if(((HOUR == "11" or HOUR=="12") and MINUTE=="30") or ((HOUR != "11" or HOUR!="12") and MINUTE=="00")):
        cur.execute('select '+timeStr+' from timetable where timetable.day="'+DAY+'"')
        curSubject=str(cur.fetchone())
        return curSubject.split("'")[1]
    else:
        return None

    
def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

 
encodeListKnown = findEncodings(images)
print('Encoding Complete')
cap = cv2.VideoCapture(0)
 
while True:
    success, img = cap.read()
    #img = captureScreen()
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
 
        if matches[matchIndex]:
            name = classNames[matchIndex].upper()
            #print(name)
            y1,x2,y2,x1 = faceLoc
            y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
            cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
            cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
            cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
            curSubject = str(getSubject())
            if(curSubject=="None" or (oldname==name and oldSubject==curSubject )):
                continue
            else:
                markAttendance(name,curSubject)
            oldSubject=curSubject
            oldname= name
    
 
    cv2.imshow('Webcam',img)
    cv2.waitKey(1)
cap.release()

# Closes all the frames
cv2.destroyAllWindows()