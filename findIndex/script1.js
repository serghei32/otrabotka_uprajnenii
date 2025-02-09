// Найти индекс первого отрицательного числа в массиве
// const numbers = [1, 3, -5, 7, -2, 8];

// const find = numbers.findIndex(num => num < 0)
// console.log(find);



//***************************/
// 2. Найти индекс первого числа больше 10
// Используя массив:
const numbers = [5, 12, 9, 18, 7];
const index = numbers.findIndex(num => num > 10)
console.log(index);
//******************************/

//3
//  const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];

//   const user=users.findIndex(item=>item.name==='Bob')
//   console.log(user);

// //********************* */  

// const items = [
//     { id: 1, value: 10 },
//     { id: 2, value: 15 },
//     { id: 3, value: 7 }
//   ];
// const item=items.findIndex()

//**************************** */   
// 4 найти наидлинейшее слово в масиве 
const strings = ["apple", "banana", "cherrtty", "date"];

// 1. Создаём массив длин строк 
// map(item => item.length) означает, что для каждого элемента массива strings мы получаем его длину (.length).
// В результате создаётся новый массив, содержащий длины строк.
// lengthsArray = [5, 6, 8, 4];
const lengthsArray = strings.map(item => item.length)
// 2. Находим максимальную длину
const maxLenght = Math.max(...lengthsArray)

const result = strings.findIndex(item => item.length === maxLenght)
console.log(result);
//****************************************** */
//Найти индекс первого четного числа в массиве

const numX = [1, 3, 7, 8, 2]

const resultX = numX.findIndex(item => item % 2 === 0)
console.log(resultX);

// ****************************************
//Найти индекс первого числа больше 100
// Дан массив чисел. Используйте findIndex(), чтобы найти индекс первого числа,
// которое больше 100.

const numXX = [50, 70, 10, 200, 90]
console.log(numXX.findIndex(item => item > 100));
// ****************************************
// Найти индекс первого отрицательного числа
// Дан массив чисел. Используйте findIndex(), чтобы найти индекс первого отрицательного числа.
const numbersXX = [3, 5, -2, 8, 0]
const resultx = numbersXX.findIndex(item => item < 0)
console.log(resultx);
// ****************************
// Дан массив объектов. Используйте findIndex(), чтобы найти индекс объекта с определенным значением свойства.
// Требуется найти объект, где name равно 'Bob'.

names = [{
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Charlie',
        age: 35
    }
]

const nameX = 'Bob'

const resultB = names.findIndex(item => item.name === nameX)
console.log(resultB);

// ****************************
// Найти индекс первого числа, которое делится на 3 и 5
// Дан массив чисел. Используйте findIndex(), чтобы найти индекс первого числа, которое делится 
// на 3 и 5 одновременно.
const numbersxx = [1, 3, 5, 15, 30, 60]
const resultxx = numbersxx.findIndex(item => item % 3 === 0 && item % 5 === 0)
console.log(resultxx);
// ****************************