/*
* Author: Shawn Phillips
* Date: 9/16/2020
*/

/*
* Display Week Links:
* Summary:
*       This function is used to display all the weeks for the 
*       Semesters matierials. 
*/
function displayWeekLinks() {

    const links = [
        {label: "Week 1", URL: "week1/index.html"},
        {label: "Week 2", URL: "week2/index.html"},
        {label: "Week 3", URL: "week3/index.html"}
        {label: "Week 4", URL: "week4/index.html"}
        {label: "Week 5", URL: "week5/index.html"}
        
    ]

    var start_href = "";
    var end_href = ">";
    for (var i = 0; i < links.length; i ++ ){
        start_href = links[i].URL;
        document.write("<li><a href=" + start_href + end_href + links[i].label + "</li></a>");

    }
   
}
