const v =  require('python-shell').PythonShell;
exports.cam=(req,res)=>{
let options = {
    mode: 'text',
    pythonPath: 'C:/ProgramData/Anaconda3/python.exe',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'D:/project/Smart attendance system/Smart-attendance-database-system/server/controllers/',
    args: [req.body.usn]
  };
  v.run('cam.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
}
// py.send('usn comes here');
// py.on('message',(msg)=>{console.log(msg)});
// py.end((er,code,signal)=>{if(er)throw er;console.log("exit code was ",code);console.log("the signal was ",signal)});}