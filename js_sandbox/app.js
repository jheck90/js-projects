const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'Florida'
    },
    getBirthYear: function(){
        // since we're an object within object, we have to use 'this'
        return 2018 - this.age;
    }
}

let val;

val = person;
// Get Specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

// array of objects
const people = [
    {name: 'john', age: 30},
    {name: 'mike', age: 23}
];

//a loop to show all people in that array above
for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
}