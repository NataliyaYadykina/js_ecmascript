/*
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/

console.log(`TASK 1`);

const arr = [1, 5, 7, 9];
console.log(arr);

const min = Math.min(...arr);
console.log(`min = ${min}`);

console.log(` `);


/*
Напишите функцию createCounter, которая создает счетчик и возвращает
объект с двумя методами: increment и decrement.
Метод increment должен увеличивать значение счетчика на 1,
а метод decrement должен уменьшать значение счетчика на 1.
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

console.log(`TASK 2`);

function createCounter() {
    let counter = 0;
    return {
        increment: () => {
            counter++;
            return counter;
        },
        decrement: () => {
            counter--;
            return counter;
        },
        value: () => {
            return counter;
        }
    }
}

const counter = createCounter();

console.log(`counter value: ${counter.value()}`);
console.log(`increment: ${counter.increment()}`);
console.log(`increment: ${counter.increment()}`);
console.log(`increment: ${counter.increment()}`);

console.log(`decrement: ${counter.decrement()}`);

console.log(`counter value: ${counter.value()}`);
console.log(` `);


/*
Напишите рекурсивную функцию findElementByClass,
которая принимает корневой элемент дерева DOM
и название класса в качестве аргументов и возвращает
первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

console.log(`TASK 3`);

function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
        return element;
    }
    for (let i = 0; i < element.children.length; i++) {
        const result = findElementByClass(element.children[i], className);
        if (result) {
            return result;
        }
        if (i === element.children.length - 1 && result === undefined) {
            return 'Element not found';
        }
    }
}

const rootElement = document.getElementById('container');
const targetElement = findElementByClass(rootElement, 'my_class');
console.log(targetElement);

console.log(` `);
