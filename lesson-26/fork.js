process.on('message', (msg) => {
    if (msg === 'disconnect') {
        process.disconnect();
        return;
    }
    console.log(msg);
    process.send('Pong');
});