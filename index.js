const readline = require('readline');
const l298n = require('./l298n.js');

l298n.setup(11,13,15,null,null,null);
l298n.setSpeed(l298n.LEFT,60);

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
rl.on('line', function (input) {
    if (input === 'quit()') {
        rl.close();
        return
    } else if (input === 'f') {
	l298n.forward(l298n.LEFT);
    } else if (input === 'b') {
	l298n.backward(l298n.LEFT)
    } else if (input === 't') {
	l298n.stop(l298n.LEFT);
    } else {
	l298n.setSpeed(l298n.LEFT,parseint(input));
    }
});

process.on("SIGINT", function(){
    l298n.stop(l298n.LEFT);
    console.log('shutdown!');
    process.exit(0);
});
