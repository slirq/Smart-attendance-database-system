# -*- coding: utf-8 -*-
"""
Created on Sat Nov 14 21:34:34 2020

@author: abdul
"""

import cv2
import face_recognition
import os
import pickle

path = 'ImagesAttendance'
images = []
classNames = []
myList = os.listdir(path)
#print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
#print(classNames)
    
    
def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList


encodeListKnown = findEncodings(images)
print(encodeListKnown)

with open('encodings', 'wb') as fp:
    pickle.dump(encodeListKnown, fp)
    
print('Encoding Complete')

with open ('encodings', 'rb') as fp:
    itemlist = pickle.load(fp)
    
print(itemlist)