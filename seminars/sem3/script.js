/*
Задание 1 (тайминг 20 минут)
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
*/

console.log(`TASK 1`);

function getPrototypeChain(obj) {
    let chain = [];
    while (obj !== null) {
        chain.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return chain;
};

const Obj_1 = {
    a: 1,
}

console.log(getPrototypeChain(Obj_1));
console.log(Obj_1);

console.log(` `);

/*
Задание 2 (20минут)
Напишите конструктор объекта Person, который принимает два аргумента:
name (строка) и age (число). Конструктор должен создавать объект с
указанными свойствами name и age и методом introduce(), который
выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
*/

console.log(`TASK 2`);

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }

}

const person1 = new Person("John", 25);

person1.introduce();

console.log(` `);

/*
Задание 3 (call, apply 20 минут)
Напишите конструктор объекта BankAccount, который будет
представлять банковский счет. Конструктор должен принимать два
аргумента: accountNumber (строка) и balance (число). Конструктор
должен создавать объект с указанными свойствами accountNumber и
balance и следующими методами:
1. deposit(amount): принимает аргумент amount (число) и увеличивает
баланс на указанную сумму.
2. withdraw(amount): принимает аргумент amount (число) и уменьшает
баланс на указанную сумму, если на счету есть достаточно средств.
Если средств недостаточно, выводится сообщение "Недостаточно
средств на счете.".
3. getBalance(): возвращает текущий баланс счета.
Задание 3 (Пример )
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."
*/

console.log(`TASK 3`);

console.log(`Выполняли на прошлом семинаре.`);

console.log(` `);

/*
Задание 4 (Class 30 минут)
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
(Пример использования)
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
*/

console.log(`TASK 4`);

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук.`);
    }

}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} принесла мяч.`);
    }

}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

console.log(` `);


/*
Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту",
которые будут изменять соответствующие поля объекта.
Также класс должен иметь статическое поле "максимальный возраст",
которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
*/

console.log(`TASK 5`);

class User {

    static #maxAge = 120;

    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        if (age > User.#maxAge) {
            throw new Error(`(in constructor) Возраст не может быть больше ${User.#maxAge} лет.`);
        }
        this.#age = age;
        this.#email = email;
    }

    getName = () => this.#name;
    setName = (name) => this.#name = name;
    getAge = () => this.#age;
    setAge = (age) => {
        if (age > User.#maxAge) {
            throw new Error(`Возраст не может быть больше ${User.#maxAge} лет.`);
        }
        this.#age = age;
    }
    getEmail = () => this.#email;
    setEmail = (email) => this.#email = email;

}

const user1 = new User("John", 25, "<EMAIL>");

console.log(user1.getName()); // Вывод: John
user1.setName("Frank");
console.log(user1.getName()); // Вывод: Frank

console.log(user1.getAge()); // Вывод: 25
user1.setAge(32);
console.log(user1.getAge()); // Вывод: 32

console.log(user1.getEmail()); // Вывод: <EMAIL>
user1.setEmail("<EMAIL_2>");
console.log(user1.getEmail()); // Вывод: <EMAIL_2>

// user1.setAge(121);
// console.log(user1.getAge()); // Uncaught Error: Возраст не может быть больше 120 лет.

// console.log(user1.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

// const user2 = new User("Bob", 125, "<EMAIL_Bob>"); // Uncaught Error: (in constructor) Возраст не может быть больше 120 лет.


/*
Создать класс "Товар" с приватными полями "название", "цена" и "количество".
Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость",
которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно.
Также класс должен иметь статическое поле "максимальное количество",
которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.
*/

console.log(`TASK 6`);

class Product {

    static #maxCount = 100;

    #name;
    #price;
    #count;

    constructor(name, price, count) {
        this.#name = name;
        this.#price = price;
        if (count > Product.#maxCount) {
            throw new Error(`(in constructor) Количество не может быть больше ${Product.#maxCount} шт.`);
        } else if (count < 0) {
            throw new Error(`Количество не может быть меньше 0 шт.`);
        }
        this.#count = count;
    }

    getName = () => this.#name;
    setName = (name) => this.#name = name;
    getPrice = () => this.#price;
    setPrice = (price) => this.#price = price;
    getCount = () => this.#count;
    setCount = (count) => {
        if (count > Product.#maxCount) {
            throw new Error(`Количество не может быть больше ${Product.#maxCount} шт.`);
        } else if (count < 0) {
            throw new Error(`Количество не может быть меньше 0 шт.`);
        }
        this.#count = count;
    }

    getCost = () => this.#price * this.#count;

}

const product1 = new Product("Товар", 100, 10);
console.log(product1.getName()); // Вывод: Товар
product1.setName("Other name");
console.log(product1.getName()); // Вывод: Other name
console.log(product1.getPrice()); // Вывод: 100
product1.setPrice(150);
console.log(product1.getPrice()); // Вывод: 150
console.log(product1.getCount()); // Вывод: 10
console.log(product1.getCost()); // Вывод: 1500

// product1.setCount(121); // Uncaught Error: Количество не может быть больше 100 шт.

// const product3 = new Product("Товар", 100, -110); // Uncaught Error: Количество не может быть меньше 0 шт.

// const product2 = new Product("Товар", 100, 110); // Uncaught Error: (in constructor) Количество не может быть больше 100 шт.
