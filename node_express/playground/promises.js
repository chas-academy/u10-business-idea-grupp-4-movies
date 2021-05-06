const doWorkPromise = new Promise((resolve, reject) => {
    //
    setTimeout(() => {
        //
        resolve([1, 2, 3, 4])
    }, 2000)
})

doWorkPromise.then((result) => {
    //
    console.log('Success!', result)
})