function submitJobAJAX() {
    fn = function(response, status){
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            alert("Job created successfully!");
            window.location = "jobListings.html";
        }
    }

    var jsonObj = new Object();
    jsonObj.firstname=document.getElementById("firstname").value;
    jsonObj.lastname=document.getElementById("lastname").value;
    jsonObj.jobtitle=document.getElementById("jobtitle").value;
    jsonObj.jobdescription=document.getElementById("jobdescription").value;
    jsonObj.joblocation=document.getElementById("joblocation").value;
    jsonObj.jobdate=document.getElementById("jobdate").value;
    jsonObj.jobpay=document.getElementById("jobpay").value;
    
    APIajax("Forms", "POST", fn, jsonObj)
}