const color = 'yellow';

switch(color){
    case 'red' :
        console.log('Red');
        break;
    case 'blue' :
        console.log('Blue');
        break;
    default:
        console.log('Color is not red or blue')
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wed';
        break;
    case 4:
        day = 'Thurs';
        break;
    case 5:
        day = 'Fri';
        break;
    case 6:
        day = 'Sat';
        break;
}

console.log(`Today is ${day}`)