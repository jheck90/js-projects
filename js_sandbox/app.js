let val;

const today = new Date();
let birthday = new Date('9/10/1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


// Months are 0 based, so Nov shows as '9'
val = today.getMonth();
val = today.getDate();
// 0 based, starting on sunday as 0
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);

console.log(birthday);