const id = 100;

// // EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
// } else {
//         console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// } else {
//         console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// } else {
//         console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//         console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     // gotta use back ticks to do this line below
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// IF ELSE
// const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red');
// } else if(color === 'blue'){
//     console.log('colow is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS
const name = 'Steve';
const age = 4;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is registered for race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');