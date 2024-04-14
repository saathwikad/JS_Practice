window.addEventListener('DOMContentLoaded', main);
function main(){
    const button = document.querySelector('button');
    button.addEventListener('click', setBackGroundColour);

    function setBackGroundColour() {
        document.body.style.backgroundColor = '#00334C';
    }
}
//'DOMContentLead' -> waits for the browser to create the entire DOMTree(replace)
// 'load' -> waits till all images, stylesheets are loaded as well.
