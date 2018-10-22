// Create some arrays, 2 ways to create array
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check to see if it is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// numbers.push(250);      // adds number onto end of array

// numbers.unshift(120);   // Adds number to front

// numbers.pop();          // Removes number from end (250 from above)

// numbers.shift();        // Removes from front

// numbers.splice(1,1);    // Where we want to start and end, remove that

// numbers.reverse();      // Reverses array

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sort arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function" to sort
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });

// Find
function under50(num){
    return num < 50;
}

// Uses the above function to find first number in array under 50
val = numbers.find(under50);



console.log(numbers);
console.log(val);