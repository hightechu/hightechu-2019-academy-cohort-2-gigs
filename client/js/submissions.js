function loadSubmissionsAJAX() {
    fn = function(response, status) {
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

    APIajax("UserProfiles", "GET", fn);
}

window.onload = function loadsubmissions()  {
    loadSubmissionsAJAX()
}