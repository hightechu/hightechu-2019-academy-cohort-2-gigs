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
                text="";
                for (userprofile of response){
                    console.log(userprofile);
                    text += '<div class="rectangle-left">';
                    text += '<h2 class="profilename-left">'+userprofile.FirstName+'</h2>';
                    text += '<p class="profileinfo-left">'+userprofile.AboutMe+'</p>';
                    text += '<p class ="profilecontact-left">'+userprofile.PhoneNumber+'</p>';  
                    text += '<p class ="profilecontact-left">'+userprofile.Email+'</p>';
                    text += '</div>';
                }
                    var profilediv = document.getElementById("profiles")
                    profilediv.innerHTML = text;
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