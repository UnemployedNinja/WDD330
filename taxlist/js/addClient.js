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

    var client = 
    {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        taxDocuments: new Object()
    };

    var filename = "readme.txt";
    var text = client;
    var blob = new Blob([client], {type:'text/plain'});
    var link = document.createElement("a");
    link.download = filename;
    // Text of download file
    link.innerHTML = client.firstName;
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    
    alert("User Added!");
    // let data = new Blob([client], {type: "text/plain"});
    // fileWriter.write(data);
   
}