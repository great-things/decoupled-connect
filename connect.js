var child_process = require("child_process");

if(process.argv.length !== 4) {
    throw new Error("We need two executables / commands as arguments.");
}
//console.log(process.argv);

function withError(error) {
    if(error !== null) {
        console.error(error);    
    }
}

var firstProcess = child_process.spawn(process.argv[2], {shell:true});
var secondProcess = child_process.spawn(process.argv[3], {shell:true});

//Connect
firstProcess.stdout.pipe(secondProcess.stdin);
secondProcess.stdout.pipe(firstProcess.stdin);

//Show errors
firstProcess.stderr.pipe(process.stderr);
secondProcess.stderr.pipe(process.stderr);
