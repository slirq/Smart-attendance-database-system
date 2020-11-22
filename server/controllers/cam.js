const m =  require('python-shell');
exports.cam=(req,res)=>{let py = new m.PythonShell('C:\\Users\\Administrator\\Documents\\DMP\\server\\controllers\\cam.py')
py.send('usn comes here');
py.on('message',(msg)=>{console.log(msg)});
py.end((er,code,signal)=>{if(er)throw er;console.log("exit code was ",code);console.log("the signal was ",signal)});}