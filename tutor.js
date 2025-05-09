//GLOBALS - NO WINDOW
//__DIRNAME - path to the current directory
//--filename - current file name
//require - function to require modules (common JS)
//module - info about the current module (file)
//process - info about env where the code is running
//exports - object that will be exported from this module

console.log(__dirname);
setInterval(() => {
    console.log('hello world');
}, 10000);