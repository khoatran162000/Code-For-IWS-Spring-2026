// Functions
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function expression
const farewell = function(name) {
    return "Goodbye, " + name + "!";
};
console.log(farewell("Bob")); // "Goodbye, Bob!"

// Arrow function
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// Function parameters
function multiply(x, y = 2) { // y has a default value of 2
    return x * y;
}
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15

// Function parameters with default values
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(3)); // 9
console.log(power(2, 3)); // 8

// Function parameters with rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// Function Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        return outerVariable + innerVariable;
    };
}
const newFunction = outerFunction('Hello, ');
console.log(newFunction('World!')); // "Hello, World!"

// JS Asynchronous Functions
// Callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Callback received:", data); // "Callback received: Sample Data"
});

// Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Promise";
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise().then((data) => {
    console.log("Promise resolved with:", data); // "Promise resolved with: Sample Data from Promise"
});

// Async/Await
async function fetchDataAsync() {
    const data = await fetchDataPromise();
    console.log("Async/Await received:", data); // "Async/Await received: Sample Data from Promise"
}
fetchDataAsync();


// JS Browser BOM Functions
// Window object
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);

// Screen object
console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);
console.log("Screen color depth:", screen.colorDepth);
console.log("Screen pixel depth:", screen.pixelDepth);

// Location object
console.log("Current URL:", window.location.href);
console.log("Hostname:", window.location.hostname);
console.log("Pathname:", window.location.pathname);
console.log("Protocol:", window.location.protocol);

// History object
console.log("History length:", window.history.length);

// Navigator object
console.log("Browser app name:", navigator.appName);
console.log("Browser app version:", navigator.appVersion);
console.log("User agent:", navigator.userAgent);
console.log("Platform:", navigator.platform);
console.log("Language:", navigator.language);

// Alert, Prompt, Confirm
// Alert
// alert("This is an alert box!");

// Prompt
// const userInput = prompt("Please enter your name:");
// console.log("User input:", userInput);

// Confirm
// const isConfirmed = confirm("Do you want to proceed?");
// console.log("User confirmed:", isConfirmed);

// Timing events
// setTimeout
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);

// setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 1000);

// Cookies
// Set a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
// Get all cookies
console.log("Cookies:", document.cookie);
// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";


// JS Web APIs Functions
// Web Forms API
// Accessing form elements
const form = document.createElement('form');
form.innerHTML = `
    <input type="text" name="username" value="JohnDoe">
    <input type="password" name="password" value="12345">
    <input type="submit" value="Submit">
`;
document.body.appendChild(form);

// Web History API
// Navigate back
// window.history.back();
// Navigate forward
// window.history.forward();
// Navigate to a specific page
// window.history.go(-1); // Go back one page

// Web Storage API
// Local Storage
localStorage.setItem('key', 'value');
console.log('Local Storage key:', localStorage.getItem('key'));
localStorage.removeItem('key');

// Session Storage
sessionStorage.setItem('sessionKey', 'sessionValue');
console.log('Session Storage sessionKey:', sessionStorage.getItem('sessionKey'));
sessionStorage.removeItem('sessionKey');

// Web Workers API
// Creating a simple web worker
const workerCode = `
self.onmessage = function(e) {
    const result = e.data * 2;
    self.postMessage(result);
}
`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));

// Web Fetch API
// Fetching data from an API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error fetching data:', error));
// Using async/await with Fetch API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const data = await response.json();
        console.log('Fetched data with async/await:', data);
    } catch (error) {
        console.error('Error fetching data with async/await:', error);
    }
}
fetchData();

// Web Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    }, (error) => {
        console.error('Error getting location:', error);
    });
}
