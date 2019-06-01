
function listJobAJAX() {
    var location = "http://localhost:3000/api/Forms";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function() {
        //A new XMLHttpRequest object starts in state 0
        if (http_request.readyState == 1  ) {
            console.log("Successfully called .open()");
        }
        if (http_request.readyState == 2  ) {
            console.log("Successfully called .send()");
        }
        if (http_request.readyState == 3  ) {
            console.log("The content is starting to come from the server");
        }
        if (http_request.readyState == 4  ) {
            console.log("All the content from the server has been downloaded");
            var response = JSON.parse(http_request.responseText);
            if('error' in response) {
                alert(response.error.message);
            }
            else { for(job in response){
                console.log(response[job]);
                document.getElementById("wrapJob").innerHTML = document.getElementById("wrapJob").innerHTML +
                   "<a href=\"jobDetails.html\"><div class=\"job\"><h3>" +
                   response[job].jobtitle
                    + "</h3>" +
                    // Firstname line
                    "<div>First name: " + response[job].firstname + "</div>" +
                    "<div>Last name: " + response[job].lastname + "</div>" +
                    "<div>Job title: " + response[job].jobtitle + "</div>" +
                    "<div>Job description: " + response[job].jobdescription + "</div>" +
                    "<div>Hourly wage: " + response[job].jobpay + "</div>" +
                    "<div>Job location: " + response[job].joblocation + "</div>" +
                    "<div>Job date: " + response[job].jobdate + "</div>" +
                    // Right side
                    "</div></a>";
            }
          
            }
        }
    }
    http_request.open("GET", location, true);
    http_request.send();
}


window.onload = function() {
    listJobAJAX();
};