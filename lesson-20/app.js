console.log('init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 0')
}, 0)

setImmediate(() => {
    console.log('Immediate ')
})

fs.readFile(__filename, () => {
    console.log('File readed')
})

console.log('final')