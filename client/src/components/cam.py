import cv2
#from signup.js import USN
cap = cv2.VideoCapture(0)
text ="press spacebar to take photo \n press 'q'to quit"
USN = "1BI18CS035"

while(cap.isOpened()):
  # Capture frame-by-frame
    ret, frame = cap.read()
    frame = cv2.resize(frame,(640,640))
    # Display the resulting frame
    if cv2.waitKey(25) & 0xFF == ord(' '):
        cv2.imwrite("./../../../server/facial recog unit/ImagesAttendance/"+ USN +".jpg",frame)
        break
    elif cv2.waitKey(25) & 0xFF == ord('q'):
        break
    cv2.putText(frame,text ,(10,500),cv2.FONT_HERSHEY_COMPLEX,0.5,(255,255,255),1,2)
    cv2.imshow("camera",frame);
cap.release()

# Closes all the frames
cv2.destroyAllWindows()
