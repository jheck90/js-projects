// document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';

// // console.log(items[0]);
// // items[0].style.color = 'red';
// // items[3].textContent = 'Hello';


// // Convert HTML colelction into array
// lis = Array.from(lis);

// lis.reverse();

// // index numbers things
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

// didn't have to convert to array first because it's a node list
items.forEach(function(item, index){
         console.log(item);
         item.textContent = `${index}: Hello`;
     });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// two different ways to loop through collections
liOdd.forEach(function(li, index){
    li.style.background = '#ccc'
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
}

console.log(items);