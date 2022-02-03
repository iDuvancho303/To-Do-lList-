let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')         // here every time we click on "add" button, it will create a new paragraph
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);               //will create the "P" paragraph inside the  container 
    input.value = "";                                   //empty input box after i type something
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})