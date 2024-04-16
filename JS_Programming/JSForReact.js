//Destructoring classes
const object = {
    id : 2,
    author : "saathwika",
    book : "unrequited",
    publishedDate : '16-04-2024',
    priceAny : 0,
    reviews : {
        goodreads : {
            value : 100,
        },

    },
    genres : ['fantasy', 'romance', 'humour', 'sliceoflife'],
}
    function getData() {
        return object;
    };
console.log(getData());

//Destructoring Arrays and rest operator
const { author, book, genres, publishedDate} = object;
console.log(author, book, genres);
const [first, second, ...rest] = genres;
console.log(first, second, rest);
//more parameters -> undefined
const entireGenres = [...genres, 'adventureous'];
console.log(entireGenres);

//update new properties, add new properties
const updateBook = {...object, publication : '16-04-2024'};
console.log(updateBook);
const alsoNew = {
    ...updateBook,
    movie: 'yes',
}
console.log(alsoNew);

//Template Literals
const summary = `${book} is a book and is published on ${publishedDate.split("-")[0]}`;
console.log(summary);

//Ternery Operator
const date = publishedDate.split("-")[0] % 2 == 0 ? 'Even' : 'Odd';
console.log(date); 

//Arrow Functions
function getdate(str) {
    return str.split("-")[0];
}
console.log(getdate('16-04-2024'));

const theDate = (str) => str.split("-")[2];
console.log(theDate(publishedDate));
//Short Circuiting
console.log(true && "something");
// true -> gives second argument
console.log(false && "nothing");
// false -> gives first argument

//falsy values = 0, '', null, undefined
//truthy values = strings

console.log(true || "also something");
// true -> gives first argument 
console.log(false || "also something");
// false -> gives second argument

//shortcircuiting -> opposite for &&, ||
//used for setting default values
console.log(object.author || "ghostwriter");
console.log(object.price || '123');

//Colaecsing operator -> Does not shortcircuit existing falsy values
console.log(object.priceAny ?? '123');
//Optimal Chaining Operator
console.log(object.reviews?.goodreads?.value + (object.reviews?.goodread?.value ?? 0));
//Array methods -> Map, filter, reduce

const newExample = {
    bookDetails : [
    {
        id : 0,
        author : "saathw",
        name : "first",
        price : 100,
    },
    {
        id : 1,
        author : "dhenuv",
        name : "second",
        price : 400,
    },
    {
        id : 2,
        author : "chitti",
        name : "third",
        price : 200,
    },
],
};
function getBookData() {
    return newExample;
}
const {bookDetails} = getBookData();
//map
const onlyTitles = bookDetails.map((book) => book.name);
console.log(onlyTitles);
const myBooks = bookDetails.map((book) => {
    return {
        title : book.name,
        writer: book.author
    };
});
console.log(myBooks);
function getPrice(bookId){
    return bookId.price;
}

const alsoMyBooks = bookDetails.map((book) => ({
        title : book.name,
        writer: book.author,
        priceCount : getPrice(book),
})
);
console.log(alsoMyBooks);

//filter
const onlyAffordable = bookDetails
.filter((book) => book.price <= 200)
.filter((book) => (book.id == 0))
.map((book) => book.author);
console.log(onlyAffordable);

//reduce
const totalCost = bookDetails
.filter((book) => book.price <= 200)
.reduce((cost, book) => cost + book.price, 23.5);
console.log(totalCost);

//sort -> mutates arrays
const prices = bookDetails
.map((book) => book.price);
console.log(prices);
//const sortedPrices = prices.sort((a, b) => b - a); -> decreasing order
const sortedPrices = prices.sort((a, b) => a - b); // -> increasing order
console.log(sortedPrices, prices);

//immutatble approach
const alsoPrices = bookDetails
.map((book) => book.price);
console.log(prices);
const mySortedPrices = alsoPrices.slice().sort((a, b) => b - a); //-> decreasing order
const alsoSortedPrices = alsoPrices.slice().sort((a, b) => a - b); // -> increasing order
console.log(mySortedPrices, alsoSortedPrices, alsoPrices);

console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => console.log(data));
 
async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
}
const todos = getTodos();
console.log(todos);



