/* ЗАДАНИЕ 1
Необходимо получить список всех пользователей с помощью
бесплатного API (https://jsonplaceholder.typicode.com/users)
и отобразить их на странице. Данные при получении необходимо сохранить
в локальное хранилище браузера localStorage.
ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ -
Пользователь должен иметь возможность удалить любого пользователя из списка.
При удалении пользователь должен удаляться не только со страницы,
но и из локального хранилища localStorage.
*/

const url_1 = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message, "Error!");
    }
}

const data_1 = await getData(url_1);
localStorage.setItem('users', JSON.stringify(data_1));

const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

const task1El = document.querySelector('.task_1');

savedUsers.forEach(user => {
    task1El.insertAdjacentHTML('beforeend', `<div class="user">
    <h3 class="user_name">${user.name}</h3>
    <p class="user_info">
        <span class="user_info_id">ID: ${user.id}</span> <br>
        <span class="user_info_city">City: ${user.address.city}</span> <br>
        <span class="user_info_company">Company: ${user.company.name}</span> <br>
        <span class="user_info_email">Email: ${user.email}</span> <br>
        <span class="user_info_phone">Phone: ${user.phone}</span>
    </p>
    <button class="user_delete">Delete</button>
</div>`)
});

const userEls = document.querySelectorAll('.user');

userEls.forEach(userEl => {
    const userId = Number(userEl.querySelector('.user_info_id').innerHTML.split(' ')[1]);
    const button = userEl.querySelector('.user_delete');
    button.addEventListener('click', () => {
        userEl.remove();
        savedUsers.forEach(userObj => {
            if (userObj.id === userId) {
                savedUsers.splice(savedUsers.indexOf(userObj), 1);
            }
        });
        localStorage.setItem('users', JSON.stringify(savedUsers));
    });
});


/* ЗАДАНИЕ 2
Необязательная задача, если вдруг первой показалось мало
Необходимо реализовать отрисовку 10 картинок собак
из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/

const count_2 = 10;
const url_2 = `https://dog.ceo/api/breeds/image/random/${count_2}`;

const data_2 = await getData(url_2);
localStorage.setItem('dogs', JSON.stringify(data_2));

const savedDogs = JSON.parse(localStorage.getItem('dogs')) || [];

const task2El = document.querySelector('.task_2');

for (let i = 0; i < savedDogs.message.length; i++) {
    setTimeout(() => {
        task2El.insertAdjacentHTML('beforeend',
            `<div class="task_2__img" style="background-image: url(${savedDogs.message[i]});background-size: cover;"></div>`);
    }, 3000 * i);
}
