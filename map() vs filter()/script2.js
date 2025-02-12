// 1. Преобразуйте все числа в массиве в их квадраты.
const arr = [1, 2, 3, 4];
const result =arr.map(item=>item*item)
console.log(result);
//*************************** */
// 2. Выберите все строки, длина которых больше 3 символов.
const arr1 = ['cat', 'dog', 'elephant', 'rat'];
 const result1= arr1.filter(item=>item.length<=3)
 console.log(result1);
 
//*************************** */
// 3. Преобразуйте все строки массива в верхний регистр.
const arr2 = ['apple', 'banana', 'cherry'];
const result2= arr1.filter(item=>item.toUpperCase())
console.log(result2);
//*************************** */
// 4. Оставьте только те числа, которые делятся на 5.
const arr3 = [1, 5, 10, 15, 20, 25];
const result3= arr3.filter(item=>item%5===0)
console.log(result3);
//*************************** */
// 5. Получите массив строк, в котором каждая строка начинается с буквы "a".
const arr5 = ['apple', 'banana', 'avocado', 'cherry'];
const result5= arr5.find(item=>item[0]==='a')
console.log(result5);
//*************************** */
// 6. Преобразуйте массив чисел в массив строк, добавив перед числом символ "$".
const arr6 = [10, 20, 30];
const result6= arr6.map(item=> `$${item}`)
console.log(result6);
// 7. Удалите все элементы массива, которые являются отрицательными 
const arr7 = [1, -2, 3, -4, 5];
const result7= arr7.filter(item=>item<0)
console.log(result7);
// 8. Преобразуйте массив строк в массив, содержащий длину каждой строки.
const arr8 = ['apple', 'banana', 'kiwi'];
const result8=arr8.map(item=>item.length)
console.log(result8);

// 9. Оставьте только те строки, которые содержат хотя бы одну букву "e".
const arr9 = ['apple', 'banana', 'cherry', 'kiwi'];
const result9=arr9.filter(item=>item.includes('a'))
console.log(result9);
// 10. Умножьте все числа в массиве на 10.
const arr11 = [1, 2, 3, 4];
const result11=arr11.map(item=>item*10)
