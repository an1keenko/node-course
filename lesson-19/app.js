const start = performance.now()


function myFunc(arg) {
    console.log(`Аргумент => ${arg}`)
}

setTimeout(myFunc, 1500, 'Test')