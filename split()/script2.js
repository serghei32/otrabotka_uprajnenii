// let str = 'abcde';
// let arr = str.split('');

// console.log(arr);


//*************************** */
// Пример
// Давайте первые 3 символа строки запишем в отдельные элементы массива: 
// let str = 'abcde';
// let arr = str.split('', 3);

// console.log(arr);

//********************************* */
// Пример8. Применение
// Дана строка с цифрами. Найдем сумму цифр из этой строки.
//  Для этого разобьем строку в массив, а затем переберем этот массив и найдем его сумму. Нас ждет подвох: 
// split возвращает строки, поэтому при суммировании преобразуем эти цифры-строки в настоящие числа с помощью Number: 
let str = '12345';
// в arr  создается масив и туда попадают по отдельности все цифры.
let arr = str.split('');
// создаю переменную счетчик 
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    //тк arr  это уже масив  то каждый его эллемент в цикле for это i 
    //включается счетчик и каждый элемент на каждой этерерации записывается в sum 
    sum += Number(arr[i]);
}
console.log(sum);
//******************************************* */
// 🔹 1. Разделение строки по пробелам
// Задача: Разбей строку "JavaScript это круто" на отдельные слова.
// Ожидаемый результат: ["JavaScript", "это", "круто"]

const str2 = 'JavaScript это круто'
const result2 = str2.split(/\s/)
console.log(result2);

//******************************************* */
// 🔹 2. Разделение строки с лишними пробелами
// Задача: Разбей строку " Учи JavaScript каждый день! " на слова.
// Ожидаемый результат: ["Учи", "JavaScript", "каждый", "день!"]

const stringg = 'Учи JavaScript каждый день!'
const arr2 = stringg.split(/\s/).length
console.log(arr2);
//******************************************* */
// 🔹 4. Разделение строки по запятым и пробелам
// Задача: Разбей строку "яблоко, банан, груша, ананас" на массив фруктов.
// Ожидаемый результат: ["яблоко", "банан", "груша", "ананас"]

const frut = "яблоко, банан, груша, ананас"
const result = frut.split(/,\s/)
console.log(result);
//******************************************* */
const string3 = "HTML | CSS - JavaScript, React"
const arr3 = string3.split(/[,\-|]+/)
console.log(arr3);


//******************************************* */

// 6. Получение первых букв каждого слова
// Задача: Извлеки первые буквы каждого слова из "Code with Passion" и собери их в строку.
// Ожидаемый результат: "CwP"

const word = `Code with Passion`
const resultX = word.split(/\s/).map((item => item[0])).join(' ')
console.log(resultX);
//****************************************** */
// Задача: Подсчитай количество предложений в "Я люблю JS. Это мощный язык! А ты?". _+??????????????????????????????????????????????|!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ожидаемый результат: 3
let str11 = "Я люблю JS. Это мощный язык! А ты?";
let sentences = str11.split(/[.!?]+/).filter(s => s.trim() !== "").length;
console.log(sentences);
//*******************************************/

const numberss = '12345'
const result1 = numberss.split('')
let sum1 = 0;
for (let i = 0; i < result1.length; i++) {
    sum1 = sum1 + Number(result1[i])
}

console.log(sum);
//*************************** */
// Давайте запишем каждую цифру этого числа в отдельный элемент массива
let num = 12345; 
let strVV = String(num)
let resultV= strVV.split('')
//******************************* */

const ar= ["Apple", "Banana", "Cherry"];
console.log(ar.join());
//*************************************** */







