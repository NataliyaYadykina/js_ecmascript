const myPromise = new Promise((resolve, reject) => {

});

console.log(myPromise);

myPromise.then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error(error, "Error"));

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message, "Error!");
    }
}

const fetchData = await getData();
console.log(fetchData);