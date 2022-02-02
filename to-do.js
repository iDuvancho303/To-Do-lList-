let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')         // here every time we click on "add" button, it will create a new paragraph
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
})