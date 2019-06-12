
function listJobAJAX() {
    fn = function(response, status) {
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
    APIajax("Forms", "GET", fn);
}


window.onload = function() {
    listJobAJAX();
};