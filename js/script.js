const myUl = document.querySelector(".myUl");
const addBtn = document.querySelector(".addBtn");
const myInput = document.querySelector(".myInput");


addBtn.addEventListener("click", function addItemFn() {
    // create List item
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(myInput.value);
    listItem.appendChild(listItemText);

    // X button
    const x = document.createElement('div');
    const xText = document.createTextNode('X');
    x.appendChild(xText);
    listItem.appendChild(x);

    // styles
    x.classList.add('xbutton');
    listItem.classList.add('myLi');

    // append to UL
    myUl.appendChild(listItem);

    // remove input value
    if (addItemFn) {
        myInput.value = "";
    }

    if (listItem.textContent === 'X') {
        listItem.remove();
    }

    // console.log(listItem.innerHTML);
    
   
    // close List item
    x.addEventListener("click", function() {
        listItem.remove();
    })
})



