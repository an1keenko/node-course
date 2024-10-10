const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', (msg) => {
    console.log(msg);
});

forkProcess.on('close', (code) => {
    console.log(`Код выхода: ${code}`);
})

forkProcess.send('Ping');
forkProcess.send('Disconnect');