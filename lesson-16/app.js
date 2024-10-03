const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDbConnection = () => {
    console.log('DB connected');
}

myEmitter.addListener('connected', logDbConnection)
myEmitter.emit('connected')

myEmitter.removeListener('connected', logDbConnection)
myEmitter.emit('connected')

myEmitter.on('msg', (data) => {
    console.log(`Get: ${data}`)
})

myEmitter.emit('msg', 'Hello! Get my message')

myEmitter.once('off', () => {
    console.log('Once log')
})

myEmitter.emit('off');
myEmitter.emit('off');

const target = new EventTarget()
const logTarget = () => {
    console.log('Connected to target')
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))