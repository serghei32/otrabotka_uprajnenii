const cars = [{
        model: 'Mustang',
        year: 1964,
        engine: 'V8',
        color: 'red',
        price: 100000
    },
    {
        model: 'Camaro',
        year: 1967,
        engine: 'V8',
        color: 'Blue',
        price: 95000
    },
    {
        model: 'Challenger',
        year: 1970,
        engine: 'V8',
        color: 'Black',
        price: 110000
    },
    {
        model: 'Corvette',
        year: 1963,
        engine: 'V8',
        color: 'Yellow',
        price: 120000
    },
    {
        model: 'Firebird',
        year: 1969,
        engine: 'V8',
        color: 'red',
        price: 105000
    }
];

const result = cars.findIndex(item => item.color === 'red')
console.log(result);

// достать все одинаковые индексы со значением red
const redcolorsCar = []
cars.forEach((item, index) => {
    if (item.color === 'red') {
        redcolorsCar.push(index)
    }

})
console.log(redcolorsCar);

//*************************************************/

// 1. Вывести все элементы массива в консоль

// Задача: Дан массив чисел, используй forEach(), чтобы вывести каждое число в консоль.

const numbers = [10, 20, 30, 40, 50];
newnumbers = []
numbers.forEach((item) => {
    newnumbers.push(item)

})
console.log(newnumbers);
//********************************************* */
// 2. Найти сумму всех чисел в массиве
// Задача: Используй forEach(), чтобы найти сумму всех чисел.
const numbersXX = [5, 10, 15, 20, 25];
let sum = 0
numbersXX.forEach((item) => {
    sum += item
})
console.log(sum);
//********************************************* */
// 3. Удвоить все элементы массива
// Задача: Используй forEach(), чтобы удвоить каждое число в массиве и сохранить результат в новом массиве.
const numbersS = [1, 2, 3, 4, 5];
const doubled = [];
numbersS.forEach(element => {
    doubled.push(element * 2)
});
console.log(doubled);

//********************************************* */
// 4. Преобразовать массив строк в верхний регистр
// Задача: Используй forEach(), чтобы преобразовать все строки в массиве в верхний регистр.
const words = ["apple", "banana", "cherry"];
const upperCaseWords = [];
words.forEach((item) => {
    upperCaseWords.push(item.toUpperCase())
})
console.log(upperCaseWords);

//********************************************* */
// 5. Найти среднее значение чисел в массиве
// Задача: Используй forEach(), чтобы вычислить среднее значение чисел в массиве.
const numbers5 = [10, 20, 30, 40, 50];
let sum5 = 0
numbers5.forEach((item, index) => {
    item + sum5
})
let avarige = sum5 / numbers5.length
console.log(avarige);
//********************************************* */
// 6. Вывести все ключи и значения объекта
// Задача: Используй forEach(), чтобы вывести в консоль все ключи и значения объекта.

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// *********** */
// 7. Подсчитать количество четных и нечетных чисел
// Задача: Используй forEach(), чтобы посчитать, сколько в массиве четных и нечетных чисел.
const numbersAA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenCount = [];
let oddCount = [];

numbersAA.forEach((item) => {
    if (item % 2 === 0) {
        evenCount.push(item)
    } else {
        oddCount.push(item)
    }
})
console.log(evenCount);
console.log(oddCount);





// // *********** */
// 9. Подсчитать количество слов в массиве
// Задача: Используй forEach(), чтобы посчитать, сколько раз встречается каждое слово в массиве.

const wordsDD = ["apple", "banana", "apple", "cherry", "banana", "banana"];
wordsDD.forEach((item)=>{
    
})
//****************************************** */
// 2. Добавить класс ко всем кнопкам
// Задача: Добавь класс "btn-active" ко всем кнопкам на странице.

const btn = document.querySelectorAll('button')
btn.forEach((item) => {
    item.classList.add('btn_active')
})
//************************************* */
// 3. Сделать все ссылки красными
// Задача: Используй forEach(), чтобы сделать все ссылки (<a>) красными.

const link = document.querySelectorAll('a')
link.forEach((item) => {
    item.style.color = 'red'
})
//************************************************ */
// включение кнопок в красный цвет 
const btn1 = document.querySelectorAll('button')
const link1 = document.querySelectorAll('a')
btn.forEach((item) => {
    item.addEventListener('click', () => {
        link.forEach((item) => {
            item.classList.toggle('red')
        })
    })
})
// *********************************************** */
// 4. Вывести текст всех абзацев в консоль
// Задача: Пройди по всем <p> и выведи их текст в консоль.


const text = document.querySelectorAll('p')
text.forEach((item) => {
    const result = item.textContent
    console.log(result);
    // 🔹 document.querySelectorAll('p') — находит все абзацы.
    // 🔹 forEach() — проходит по каждому <p>.
    // 🔹 textContent — получает текст из <p>.
    // 🔹 Выводим текст в консоль.
})

//***************************************/
// 5. Добавить обработчик клика ко всем кнопкам
// Задача: Добавь обработчик события click на все кнопки, чтобы при клике появлялось "Кнопка нажата!".

const btn11 = document.querySelectorAll('.btn11')
btn11.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.textContent='done'
    })
})


