function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("tHIS IS SRAVANI");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "SRAVANI", age: 24 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();