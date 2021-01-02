const v =  require('python-shell').PythonShell;
exports.cam=(req,res)=>{
let optionsW = {
    mode: 'text',
    pythonPath: 'C:/ProgramData/Anaconda3/python.exe',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'D:/project/Smart attendance system/Smart-attendance-database-system/server/controllers/',
    args: [req.body.usn]
  };
  console.log("came in server")
let optionsL={
  mode: 'text',
  args: [req.body.usn],
  pythonPath:"/home/atharva/miniconda3/bin/python3",
  scriptPath:"/home/atharva/Documents/dmp/server/controllers/"
}
  try{v.run('cam.py', optionsL, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });}
  catch(e){
    console.log("\n\n\n error is here \n\n\n\n",e)
  }
  res.status(500)
}
// py.send  