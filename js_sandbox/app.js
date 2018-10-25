//  // addeventlistener needs the action, and a function
//  document.querySelector('.clear-tasks').addEventListener('click', function(e){
//      console.log('Hello World');

//      // Prevents default link method
//      //e.preventDefault();
//  });


// addeventlistener needs the action, and a function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    //console.log('Clicked');

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.classList;

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative t o the window
    val = e.clientY;
    val = e.clientX;

     // Coords event relative to the element
     val = e.offsetY;
     val = e.offsetX;

    console.log(val);
}