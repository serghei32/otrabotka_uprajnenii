//************************* */
// const element = document.querySelector('.box')
// element.classList.add('blue')
// // element.classList.remove('blue')

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//     element.classList.add('red')

// })

// *******************************

// Упражнение 5: Добавить несколько классов

// Добавьте классы red, bold, и shadow к элементу с классом text.
// const element = document.querySelector('.box')
// const p = document.querySelector('.text')
// p.classList.add('bold','red','blue')

// Создайте элемент div с классами box, shadow, и rounded, и добавьте его в body.

// const kartoshka=document.createElement('div')
// kartoshka.classList.add('red')
// kartoshka.innerHTML=`  
//   <li>privet kartoshka !!</li>
// `
// element.appendChild(kartoshka)

// const element = document.querySelector('.box')
// const p = document.querySelector('.text')
// p.classList.add('bold','red','blue')



// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//   p.classList.toggle('red')
// })

//**************************************** */
// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')
// const list = document.querySelector('.list')

// btn.addEventListener('click', addfunction)

// function addfunction() {
//   if (input.value.trim()=== '') {
//     alert( 'nono')
//     return;
//   }
//   const li = document.createElement('li')
//   li.textContent = input.value
//   list.appendChild(li)
//   // удаление эллементов если будет больше 5 шт !!
//   if (list.children.length > 5) {
//     list.removeChild(list.firstElementChild);
//   }
  
  
//   // delete button  отдельно удаляем кнопкой 
//   const delBtn= document.createElement('button')
//   delBtn.textContent='❌'
//   delBtn.addEventListener('click', delFunction)
//   function delFunction(){
//     li.remove()
//   }
  
//   li.appendChild(delBtn)
//   list.appendChild(li)
  
//   input.value = '';

// }

// let element = document.getElementById("myElement");
// element.remove();  // Удалит элемент из DOM


//**************************************** */


// let str = "   Привет, мир!   ";
// let trimmedStr = str.trim();

// console.log(trimmedStr);  // "Привет, мир!"

const numbers = [1, 3, -5, 7, -2, 8];