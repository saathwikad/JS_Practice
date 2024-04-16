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
console.log(getBookData());
const {bookDetails} = getBookData();
function getBookData(bookId) {
    return bookId.author;
}
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

const alsoMyBooks = bookDetails.map((book) => ({
        title : book.name,
        writer: book.author,
        priceCount : getBookData(book),
})
);
console.log(alsoMyBooks);

//filter
const onlyAffordable = bookDetails.filter((book) => book.price <= 200);
console.log(onlyAffordable);

