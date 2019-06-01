function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profilepicture')
                .attr('src', e.target.result)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function userSubmit() {
    event.preventDefault();
    var location = "http://localhost:3000/api/UserProfiles";
    var http_request = new XMLHttpRequest;

    http_request.onreadystatechange = function() {

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
    jsonObj.FirstName=document.getElementById("FirstName").value;
    jsonObj.LastName=document.getElementById("LastName").value;
    jsonObj.Email=document.getElementById("Email").value;
    jsonObj.PhoneNumber=document.getElementById("PhoneNumber").value;
    jsonObj.AboutMe=document.getElementById("AboutMe").value;
    postData = JSON.stringify(jsonObj);
    http_request.open("POST", location, true);
    http_request.setRequestHeader("Content-type", "application/json");
    http_request.send(postData);
}