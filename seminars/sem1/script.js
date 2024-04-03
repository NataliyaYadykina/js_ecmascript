/*
Задание 1 (тайминг 20 минут)
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
2, 3, 4, 5, 6]
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]
*/

console.log(`Task 1`);

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // О);
console.log(` `);


/*
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]
*/

console.log(`Task 1_1`);

function removeDuplicates(...rest) {
    const newArray = rest.filter((item, index) => {
        return rest.indexOf(item) === index;
    });
    return newArray;
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
console.log(` `);


console.log(`Task 1_2`);

function removeDuplicates2(...rest) {
    const newArray = [...new Set(rest)];
    return newArray;
}

console.log(removeDuplicates2(1, 2, 3, 2, 4, 1, 5));
console.log(` `);


/*
Задание 2 (Чистые функции 25минут)
Текст задания
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
*/

console.log(`Task 2_1`);

function getEvenNumbers(arr) {
    return arr.filter(item => item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
console.log(` `);


/*
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
*/

console.log(`Task 2_2`);

function calculateAverage(arr) {
    return arr.reduce((el, acc) => el + acc, 0) / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(` `);

/*
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной. 
*/

console.log(`Task 2_3`);

function capitalizeFirstLetter(str) {
    return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

console.log(capitalizeFirstLetter(`hello, world!`));
console.log(` `);

/*
Задание 3 (Замыкания 20 минут)
1. Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а
метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не
напрямую.
*/

console.log(`Task 3_1`);

function createCalculator(defaultValue) {
    return {
        value: defaultValue,
        add(number) {
            this.value += number;
            return this.value;
        },
        subtract(number) {
            this.value -= number
            return this.value;
        }
    }
}

const calculator = createCalculator(10);
console.log(calculator);
console.log(calculator.add(2));
console.log(calculator.subtract(3));
console.log(` `);

/*
Задание 4 (Лексический контекст 15 минут)
1. Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
*/

console.log(`Task 4_1`);

function createGreeting(userName) {
    return () => `Hello, ${userName}!`;
}

const greeting = createGreeting('John');
console.log(greeting());
console.log(` `);

/*
Задание 5 (тайминг 15 минут)
1. Задача: Напишите функцию createPasswordChecker, которая
принимает допустимую длину пароля в качестве аргумента и
возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать
true, если его длина соответствует допустимой, и false в противном
случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
*/

console.log(`Task 5_1`);

function createPasswordChecker(maxLength) {
    return (password) => password.length <= maxLength;
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password1'));
console.log(isPasswordValid('secret'));
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

console.log(`Task 6_1`);

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
