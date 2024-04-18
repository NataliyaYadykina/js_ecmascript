const data = localStorage.setItem('myData', 'something');
const data1 = localStorage.getItem('myData');

console.log(data1);

// localStorage.removeItem('myData');

// localStorage.clear(); // полная очистка локального хранилища браузера

console.log(localStorage.key(0));

/////////

localStorage.user = {
    name: 'Ivan',
    age: 30,
    email: '<EMAIL>',
}

console.log(localStorage.user);

///////////////

localStorage.user = JSON.stringify({
    name: 'Ivan',
    age: 30,
    email: '<EMAIL>',
});

console.log(localStorage.user);