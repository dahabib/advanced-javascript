const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Main array : " + numbers);

// slice = array.slice(starting index, ending index)
const slicedResult = numbers.slice(3, 5);
console.log("Sliced : " + slicedResult);

// splice = array.splice(starting index, count of index to splice)
const splicedResult = numbers.splice(2, 3);
console.log("Spliced : " + splicedResult);

// join = array.join("separator"); joins as string, use separator if needed
const joinedResult = numbers.join("-");
console.log("Joined : " + joinedResult);