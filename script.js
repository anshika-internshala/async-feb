console.log("Hiii");
console.log("Hello");
setTimeout(function() {
    console.log("setTimeout1");
}, 0);
setTimeout(function() {
    console.log("setTimeout2");
}, 1000);
setTimeout(function() {
    console.log("setTimeout3");
}, 500);
console.log("Internshala");

// synchronous // asynchronous behaviour

for(let i=0 ; i<5 ; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// i = 0 i=1 i=2 i=3 i=4 i=5

// 5 5 5 5 5
// 0 1 2 3 4