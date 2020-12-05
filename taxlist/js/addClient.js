/*
* Author: Shawn Phillips
* Date: 12/4/2020
*/

/*
* Add Client:
* Summary:
*       
*/

// Tax Document Object
var taxDocuments = 
{
    wTwo: false,
    tenNinetyEight: false,
    tenNinetyEightT: false,
    tenNinetyNine: false,
    tenNinetyNingINT: false,
    tenNinetyNineDiv: false,
    propertyTax: false
    
};

// Client Object 
var client = 
{
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    taxDocuments: new Object()
};

function store() {
    let clients;
    if(localStorage.getItem('clients') === null) {
        clients = [];
    } else {
        client = JSON.parse(localStorage.getItem('clients'));
    }
    return clients; 
}

function addClient() {

    let clientList = store(); 
    let client = new Object(); 
    client.firstName = document.getElementById("firstName");
    client.lastName = document.getElementById("lastName");
    client.email = document.getElementById("email");
    client.phoneNumber = document.getElementById("phone");
    
    clientList.push(client);
    localStorage.setItem('clientList', JSON.stringify(clientList));
   
}