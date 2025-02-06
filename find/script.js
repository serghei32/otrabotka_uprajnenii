// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];


//   users.find((item=>item.id===2)



// const numbers = [4, 7, 10, 12, 5, 8, 14];
// const number = numbers.find(num => num >= 10);

// const section=document.createElement('section')

// const textType=document.createTextNode(number)
// section.appendChild(textType)
// document.body.appendChild(section)

// ******************************


// Задача: Найти сотрудника с ID 3
// const employees = [
//     { id: 1, name: 'John', position: 'Developer' },
//     { id: 2, name: 'Sara', position: 'Designer' },
//     { id: 3, name: 'Paul', position: 'Manager' },
//     { id: 4, name: 'Anna', position: 'Developer' }
// ];

// const member=employees.find(item=>item.id===3)

// console.log(member);

// ****************************************
// const cars = [
//     { id: 1, model: 'Tesla Model S', year: 2020 },
//     { id: 2, model: 'BMW 3 Series', year: 2021 },
//     { id: 3, model: 'Audi A4', year: 2019 },
//     { id: 4, model: 'Mercedes-Benz E-Class', year: 2022 }
// ];

// // Задача: Найти автомобиль с моделью 'BMW 3 Series'

// const car= cars.find(item=>item.model==='BMW 3 Series')
// console.log(car);

const btnIn=document.querySelectorAll('.btn')



const customers = [
    { id: 0, name: 'James', email: 'james@example.com' },
    { id: 1, name: 'Mary', email: 'mary@example.com' },
    { id: 2, name: 'John', email: 'john@example.com' },
    { id: 3, name: 'Alice', email: 'alice@example.com' }
];

// const member=customers.find((item,index)=> index===0)
// console.log(member);



btnIn.forEach((button,index)=>{
    button.addEventListener('click', ()=>{
        const selectedIt= customers.find(member =>member.id===index)
        if (selectedIt===true) {
            const section= document.createElement('section')
            section.innerHTML+=`
            <p>pokazat imail ${selectedIt.name}</p> 
            `
            document.body.appendChild(section)
            
        }

    })
})



















// ****************************************