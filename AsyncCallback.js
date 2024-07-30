function fetch(callback) {                                                              //parameter
    setTimeout(() => {
        const Emp = { name: "sravani", age: 24, email:"sravani@gmail.com" };              //constant 
        callback(Emp);
    }, 2000);
    console.log("Hello World!");
}

fetch((Emp) => {
    console.log("Data received (Callback):", Emp);
});