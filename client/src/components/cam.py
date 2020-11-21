import cv2
#from signup.js import USN
cap = cv2.VideoCapture(0)

USN = "1BI18CS003"
while(cap.isOpened()):
  # Capture frame-by-frame
    ret, frame = cap.read()
    if ret == True:
    
    # Display the resulting frame
        if cv2.waitKey(1) & 0xFF == ord(' '):
            cv2.imwrite("server/facial recog unit/ImagesAttendance/"+ USN + ".png",frame)
            break
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
cap.release()

# Closes all the frames
cv2.destroyAllWindows()
