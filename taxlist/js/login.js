function validLogin(user, pass) {

    // This is hardcoded for testing
    if(user == "admin" && pass == "admin")
    {
        console.log("Login Successful!");
        window.location.href = "./views/main.html";
    }
}

function validateForm() {

    let user = document.forms["myForm"]["userName"].value;
    let pass = document.forms["myForm"]["password"].value;

    if (user == "") {
      alert("Username must be filled out!");
      return false;
    }
    else if (pass == "") {
        alert("Password must be filled out!");
        return false;
    } else {
        validLogin(user, pass); 
    }
}