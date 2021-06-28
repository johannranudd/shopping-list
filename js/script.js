const myUl = document.querySelector(".myUl");
const addBtn = document.querySelector(".addBtn");
const myInput = document.querySelector(".myInput");


addBtn.addEventListener("click", function addItemFn() {
    // create List item
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(myInput.value);
    listItem.appendChild(listItemText);

    

    // done
    const done = document.createElement('div');
    const doneText = document.createTextNode('Done');
    done.appendChild(doneText);
    listItem.appendChild(done);

    

    // X button
    const x = document.createElement('div');
    const xText = document.createTextNode('X');
    x.appendChild(xText);
    listItem.appendChild(x);

    // button wrapper
    const btnWrapper = document.createElement('div');
    btnWrapper.appendChild(x);
    btnWrapper.appendChild(done);
    listItem.appendChild(btnWrapper);

    // styles
    x.classList.add('xbutton');
    listItem.classList.add('myLi');
    done.classList.add('doneBtn')
    btnWrapper.classList.add('btnWrapper')
    // append to UL
    myUl.appendChild(listItem);

    // remove input value
    if (addItemFn) {
        myInput.value = "";
    }

    if (listItem.innerHTML === `<div class="btnWrapper"><div class="xbutton">X</div><div class="doneBtn">Done</div></div>`) {
        listItem.remove();
    }

    // console.log(listItem.innerHTML);
    console.log(listItemText);
    
   
    // close List item
    x.addEventListener("click", function() {
        listItem.remove();
    })
    // done List item
    done.addEventListener("click", function lineThroughFn(e) {
        // listItem.style.textDecoration = 'line-through';
        // x.style.textDecoration = 'none';
        e.style.textDecoration = 'line-through';
        
    })
    lineThroughFn(listItemText);
})



