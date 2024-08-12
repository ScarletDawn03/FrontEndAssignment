// script.js

document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var storedEmail = getCookie("email");
    var storedPassword = getCookie("password");
    var username=getCookie("username");

   

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful! Welcome, "+username);
        window.location.href = "MalaysiaMap.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password.");
    }
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
