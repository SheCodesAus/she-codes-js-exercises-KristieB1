let shoppingListItems = ["milk", "eggs", "bread"]
let listElememt = document.getElementById("shopping-list-items");

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
}

function updateItems() {
    let listElememt = document.getElementById("shopping-list-items");
    listElememt.innerHTML = "";
    shoppingListItems.forEach((item) => {
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElememt.appendChild(itemElement);
    });
}
 


shoppingListItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElememt.appendChild(itemElement);
});

function deleteList() {
    let listElememt = document.getElementById("shopping-list-items");
    listElememt.innerHTML = "";
    // shoppingListItems.forEach((item) => {
    // shoppingListItems.pop(item);
    shoppingListItems = []
    
// });
console.log(shoppingListItems);
}
