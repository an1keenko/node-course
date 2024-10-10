const { performance, PerformanceObserver } = require('perf_hooks');
const { Worker } = require('worker_threads');
const { fork } = require('child_process');

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(entry.name, ':', entry.duration);
    });
});
performanceObserver.observe({ entryTypes: ['measure'] });

const workerFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('start');
        const worker = new Worker('./worker.js', { workerData: { array } });

        worker.on('message', (msg) => {
            performance.mark('end')
            performance.measure('worker', 'start', 'end');
            resolve(msg);

        });
    })
}

const forkFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('start');
        const forkProcess = fork('fork.js');
        forkProcess.send({array})
        forkProcess.on('message', (msg) => {
            performance.mark('end')
            performance.measure('fork', 'start', 'end');
            resolve(msg);
        });
    })
}

const main = async () => {
    await workerFunction([25, 20, 19, 48, 30, 50]);
    await forkFunction([25, 20, 19, 48, 30, 50]);
}

main()