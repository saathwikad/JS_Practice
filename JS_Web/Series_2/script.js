const secondLi = document.getElementById('second-li');
const firstLi = document.querySelector('li');
const listLi = document.querySelectorAll('li');
console.log(listLi);
console.log(firstLi);
console.log(secondLi);
listLi.forEach(li => {
    console.log(li);
});