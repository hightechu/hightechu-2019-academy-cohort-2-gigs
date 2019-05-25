function submitJobAJAX() {
    var location = "http://localhost:3000/api/jobs";
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
            else {
                alert("Job created successfully!");
            }
        }
    }


    var jsonObj = new Object();
    jsonObj.FistName=document.getElementById("FirstName").value;
    jsonObj.LastName=document.getElementById("LastName").value;
    jsonObj.JobTitle=document.getElementById("JobTitle").value;
    jsonObj.JobDesc=document.getElementById("JobDesc").value;
    jsonObj.JobLoc=document.getElementById("JobLoc").value;
    jsonObj.JobDate=document.getElementById("JobDate").value;
    postData = JSON.stringify(jsonObj);
    http_request.open("POST", location, true);
    http_request.setRequestHeader("Content-type", "application/json");
    http_request.send(postData);
}
