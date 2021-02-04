// map returns an array

const numbers = [3, 4, 5, 6, 7, 8, 9];

// const output = [];

// for(let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element * element;
//     output.push(result);
// }

// const triple = element => element * element * element;
// const double = x => x * 2;

// const result = numbers.map(function(element, index, array){
//     return element * element;
// });

const double = numbers.map(x => x * 2);


console.log(double);

// ================== Object ===================== //

const students = [
    {id: 11, name: 'Salman'},
    {id: 22, name: 'Sadman'},
    {id: 33, name: 'Happyman'},
    {id: 44, name: 'Batman'},
    {id: 55, name: 'Gentermen'}
];

// ===== using for loop ====

const result = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name = element.name;
    result.push(name);
}
console.log(result);

// ===== using map =======

const studentName = students.map( student => student.name);
console.log(studentName);