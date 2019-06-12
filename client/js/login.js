function loginAJAX() {
    fn = function(response, status) {
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            setCookie("id", response.id, response.ttl)
            alert("Successfully logged in!");
            loadDoc("data.html");
        }
    }

    var jsonObj = new Object();
    jsonObj.email = document.getElementById("email").value;
    jsonObj.password = document.getElementById("password").value;
    jsonObj.ttl = 300

    APIajax("users/login", "POST", fn, jsonObj);
}

if(getCookie("id")){
    alert("You are already logged in.");
    loadDoc("data.html");
}