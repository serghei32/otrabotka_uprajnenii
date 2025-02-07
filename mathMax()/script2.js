// let numbers = [3, 7, 2, 9, 12];
// const maxNum= Math.max(...numbers)
// console.log(maxNum);

// // Найди максимальное число в массиве

// let words = ["apple", "banana", "cherry", "watermelon"];

// const itemLenght= words.map(item=>item.length)
// const maxNumber= Math.max(...itemLenght)
// console.log(maxNumber);

const numbers2 = [45, 23, 67, 12, 89];
//в переменную записываю значение которе будет наименьшим из масива
// с помощью ... разбиваю этот масив на отдельные эллементы что бы его увидел метод math.min
const listaNumer= Math.min(...numbers2)
console.log(listaNumer);

// теперь говорю переменной что запиши в себя значение которое прийдет из findIndex
// в этот findIndex попадет каждый эллемент масива и если он совпадет с listaNumer то он выведится в log
const minstaNumer= numbers2.findIndex(item=>item===listaNumer)
console.log(minstaNumer);

//Важно понимать, что findIndex() проверяет сам элемент массива (значение), а не его индекс. 
// Он перебирает элементы массива и, когда находит тот, который удовлетворяет условию
//  (в данном случае, когда элемент равен listaNumer), возвращает индекс этого элемента.