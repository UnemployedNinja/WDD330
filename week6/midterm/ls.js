// This program will store the list of TODO items

var itemArrayList = new Array();

// This is our item object
var singleItem = {

    timestamp: Date(),
    content: "Temp Data",
    completed: false 
};

// Class delcaraction
export default class Items {
    constructor(elementID) {
        this.elementID = document.getElementById(elementID);
    }

    getAllItems() {
        return itemList;
    }

    showItemList() {

    }
    
}

function addItem() {
    singleItem.content = document.getElementById("todoItem")
    singleItem.completed = false;
    singleItem.timestamp = Date(); 

    itemArrayList.push(singleItem); 
}