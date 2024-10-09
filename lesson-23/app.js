const perf_hooks = require('perf_hooks')

test = perf_hooks.performance.timerify(test)

const perfObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries())
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`)
    observer.disconnect()
})

perfObserver.observe({ entryTypes: ['measure', 'function'] })

function test() {
    for (let i = 0; i < 100000; i++) {
        arr.push(i * i)
    }
}

function slow() {
    performance.mark('start')
    const arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(i * i)
    }
    performance.mark('end')
    performance.measure('slow', 'start', 'end')
}

test()
slow()