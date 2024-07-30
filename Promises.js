function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "sravs", age: 24 ,email:"sravani@gmail.com" };
            reject(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data received (Promise):", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
