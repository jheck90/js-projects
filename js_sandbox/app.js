let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');




val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get Children element nodes
val = list.children;
val = list.children[0];
list.children[0].textContent = 'Hello';

// Children of Children
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

console.log(val);
