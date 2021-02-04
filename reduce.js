// reduce returns a single value or object

const numbers = [3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce(function(sum, number){
    return sum + number;
}, 0);

const sum2 = numbers.reduce((sum, number) => sum + number, 0);

console.log(sum);
console.log(sum2);