// Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange'];
fruits.push('cantaloupe');
console.log(fruits);

fruits.pop();
console.log(fruits);


// Task 2: Sorting Arrays

let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers);


// Task 3: Applying Array Methods

let numbersArray = [3, 1, 5, 2, 4];
let doubledNumbers = numbersArray.map(number => number * 2);
console.log(doubledNumbers);

let filteredNumbers = numbersArray.filter(number => number % 2 !== 0);
console.log(filteredNumbers);

let sumOfNumbers = numbersArray.reduce((acc, current) => acc + current, 0);
console.log(sumOfNumbers);


