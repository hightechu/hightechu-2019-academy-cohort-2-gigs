import { json } from "express";

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
    fn = function(response, status) {
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            alert("Job created successfully!");
        }
    }

    var jsonObj = new Object();
    jsonObj.FirstName=document.getElementById("FirstName").value;
    jsonObj.LastName=document.getElementById("LastName").value;
    jsonObj.Email=document.getElementById("Email").value;
    jsonObj.PhoneNumber=document.getElementById("PhoneNumber").value;
    jsonObj.AboutMe=document.getElementById("AboutMe").value;
    
    APIajax("UserProfiles", "POST", fn, jsonObj);
}