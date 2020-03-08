var listItemCounter = 0;
function handleInput() {
    if (event.keyCode === 13) {
        addListItem();
    }
}

function addListItem() {
    var text = document.getElementById("input").value;
    var list = document.createElement('li');
    list.setAttribute("id", "li" + listItemCounter++);
    list.innerHTML = text;
    list.addEventListener("click", function () {
        this.setAttribute("class", "completed");
    });
    document.getElementById("list").appendChild(list);

    list.innerHTML = list.innerHTML + "<span class='float-right delete-icon' onclick='removeItem(this)'>X</span>";
    document.getElementById("input").value = '';
}

function removeItem(el) {
    var element = el;
    element.parentNode.remove();
}