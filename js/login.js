// script.js
document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var storedUsername = getCookie("username");
    var storedPassword = getCookie("password");
    

   

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful! Welcome, "+username);
        window.location.href = "index.html"; // Redirect to homepage
        localStorage.setItem('loggedIn', 'true');
    } else {
        alert("Invalid username or password.");
    }
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}


