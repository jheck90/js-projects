// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World!')

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//     console.log('Yes');
// } else {
//     console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width (not scroll bars and ish)
val = window.innerHeight;
val = window.innerWidth;

// Scroll points (figuring out where you in terms of scrolling)
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-5);

// val = window.history.length

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;





console.log(val);

