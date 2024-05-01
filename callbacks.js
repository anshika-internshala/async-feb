function step1(val, callback) {
    setTimeout(() => {
        callback(val + 1);
    }, 1000)
    // 1
}

function step2(val, callback) {
    callback (val + 2); // 3
}

function step3(val, callback) {
    callback (val + 3); // 6
}

// synchronous code

// function execution() {
//     let result = 0;

//     result = step1(result);
//     result = step2(result);
//     result = step3(result);

//     console.log(result); // 6
// }

execution();

function execution() {

    step1(0, (result) => {
        step2(result, (result1) => {
            step3(result1, (result2) => {
                console.log(result2);
            })
        })
    })
}

// asynchronous behaviour

// callback hell // pyramid of doom

// Promises