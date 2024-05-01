let promise = new Promise(function(resolve, reject) {
    let bool = true;

    if (bool) {
        resolve("Successful");
    } else {
        reject("Rejected");
    }
});

promise.then((result) => {
    console.log(result);
})



fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))
            

// Pending , Resolved, Rejected