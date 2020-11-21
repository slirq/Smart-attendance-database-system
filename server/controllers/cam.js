const {spawn} = require('child_process');

exports.cam= async (req,res)=>{
    console.log("i came here")
    var dataToSend;
    const python = spawn('python', ['cam.py']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.send(dataToSend)
    });
    // return new Promise((myRes,myRej)=>{
    //     if(sent === 1)
    //         myRes("OK")
    //     else
    //     myRej("Error")
    // })
}