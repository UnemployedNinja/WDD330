/*
* Author: Shawn Phillips
* Date: 12/4/2020
*/

/*
* Clients:
* Summary:
*       
*/

function displayClientList() {

    // var start_href = "";
    // var end_href = ">";
    document.write("<ul>");
    for (var i = 0; i < localStorage.length; i ++ ){
        //start_href = links[i].URL;
       // document.write("<li><a href=" + start_href + end_href + links[i].label + "</li></a>");
        document.write("<li><input type='button' value='client' onClick='displaySpecificClient();' /</li>");

    }
    document.write("</ul>");
   
}

// function displaySpecificClient() {
//     var client 
// }