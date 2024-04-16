// promises -> object -> value for asynchronous operations
// state -> pending, fullfilled, rejected
//resolve, reject -> functions
const promise = new Promise((resolve, reject) => {
    resolve(2); //-> changes state fullfilled to 2
});
console.log(promise);