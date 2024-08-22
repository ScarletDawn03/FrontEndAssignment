function checkPass(){
    var x=document.forms["signUp"]["confirmPassword"].value;
    var y=document.forms["signUp"]["password"].value;
    if (x!=y ||x==""){
    alert("The confirm password must be same as password!");
    return false;
        }

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let dob=document.getElementById("dob").value;
    let email=document.getElementById("email").value;

    document.cookie=`username=${username};`;
    document.cookie=`password=${password};`;
    document.cookie=`dob=${dob};`;
    document.cookie=`email=${email};`;

    alert("Sign Up Successfully!!!");
    window.location.href = "loginPage.html";
    return false;
}