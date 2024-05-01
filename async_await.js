// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

 async function fetchData() {
   try {
    const res =  await fetch('https://dummyjson.com/products/1');
    const response = await res.json();
    console.log(response);
   } catch(err) {
    console.log(err);
   } 
}

fetchData();