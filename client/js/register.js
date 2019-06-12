function registerAJAX() {
    fn = function(response, status) {
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            alert("Account created successfully!");
            loadDoc("login.html");
        }
    }

    var jsonObj = new Object();
    jsonObj.email = document.getElementById("email").value;
    jsonObj.password = document.getElementById("password").value;
    
    APIajax("users", "POST", fn, jsonObj);
}

if(getCookie("id")){
    alert("You are already logged in.");
    loadDoc("data.html");
}