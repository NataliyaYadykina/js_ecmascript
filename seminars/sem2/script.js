/*
Задание 1 (тайминг 20 минут)
1. Создайте объект Person, представляющий человека, с
следующими свойствами: name, age и gender. Добавьте
также методы introduce и changeName. Метод introduce
должен выводить информацию о человеке, включая его
имя, возраст и пол. Метод changeName должен изменять
имя человека на новое заданное значение.
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is
John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
*/

console.log(`TASK 1`);

const person = {
    name: this.name,
    age: this.age,
    gender: this.gender,
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newName) {
        this.name = newName;
    }
}

person.name = "John";
person.age = 25;
person.gender = "male";
person.introduce();
person.changeName("Mike");
console.log(person.name);
console.log(` `);


/*
Задание 2 (20минут)
1. Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.
*/

console.log(`TASK 2`);

const animal = {
    name: this.name,
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

const dog = {
    name: this.name,
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

animal.name = "Animal";
dog.name = "Rex"
animal.eat();
dog.bark();
// Одалживание метода eat() из объекта Animal к объекту Dog
dog.eat = animal.eat;
dog.eat();

console.log(` `);


/*
Задание 3 (call, apply 20 минут)
1. Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
*/

console.log(`TASK 3`);

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

console.log(` `);

const User = {
    name: 'Bob',
    hello: function () {
        console.log(`Hello, ${this.name}!`);
    }
}

const User2 = {
    name: 'Alice',
}

User.hello(); // Вывод: Hello, Bob!
User.hello.call(User2); // Вывод: Hello, Alice!

console.log(` `);

/*
Задание 4 (Объекты через class 25 минут)
1. Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение с представлением
имени и возраста персоны.
const person = new Person("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.
*/

console.log(`TASK 4`);

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person_4 = new Person("John", 25);
person_4.introduce();

console.log(` `);


/*
Задание 5 (Class 30 минут)
Создайте класс BankAccount, который представляет банковский счет.
У него должны быть свойства accountNumber (номер счета) и balance
(баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь
также статическое свойство bankName, которое содержит название
банка.
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890
*/

console.log(`TASK 5`);

class BankAccount {
    static bankName = "Bank of Russia";

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`Created account ${this.accountNumber} in ${BankAccount.bankName}.`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}.`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}.`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}.`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890

console.log(` `);


/*
Задание 6 (Рекурсия 25 минут)
1. Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9)
*/

console.log(`TASK 6`);

function sumDigits(number) {
    if (number < 10) {
        return number;
    } else {
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
}

console.log(sumDigits(123));
console.log(sumDigits(456789));

console.log(` `);
