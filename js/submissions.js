function loadSubmissionsAJAX() {
    var location = "http://localhost:3000/api/UserProfiles";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function() {
        //A new XMLHttpRequest object starts in state 0
        
        if (http_request.readyState == 4  ) {
            console.log("All the content from the server has been downloaded");
            var response = JSON.parse(http_request.responseText);
            if('error' in response) {
                alert(response.error.message);
            }
            else {
                alert("Got profile" + response);
            }
        }
    }

    http_request.open("GET", location, true);
    auth = getCookie("id");
    if(auth) {
        http_request.setRequestHeader('Authorization', auth);
    }
    http_request.send();
}

window.onload = function loadsubmissions()  {
    loadSubmissionsAJAX()
}