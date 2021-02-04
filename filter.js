// filter returns array with filtered elements

const numbers = [3, 4, 5, 6, 7, 8, 9];

const result = numbers.filter(x => x > 5);

console.log(result);


// ====== Object ======

const students = [
    {id: 11, name: 'Salman'},
    {id: 22, name: 'Sadman'},
    {id: 33, name: 'Happyman'},
    {id: 44, name: 'Batman'},
    {id: 55, name: 'Gentermen'}
];

const studentName = students.filter(function(student){
    return student.id > 22;
});
console.log(studentName);

const studentName2 = students.filter(student => student.id > 33);
console.log(studentName2);