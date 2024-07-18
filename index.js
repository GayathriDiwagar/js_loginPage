var emailArray=[];
var passwordArray=[];

var regBox=document.getElementById("register");
var loginBox=document.getElementById("login");
var forgetBox=document.getElementById("forgot");
var loginTab=document.getElementById("lt");
var regTab=document.getElementById("rt");

function registertab()
{
    event.preventDefault();
    loginBox.style.visibility="hidden";
    regBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgba(19, 226, 181, 0.82)";
    loginTab.style.backgroundColor="rgba(150, 228, 210, 0.82)";
}
function logintab()
{
    event.preventDefault();
    loginBox.style.visibility="visible";
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgba(150, 228, 210, 0.82)";
    loginTab.style.backgroundColor="rgba(19, 226, 181, 0.82)";
}
function forgotTab()
{
    event.preventDefault();
    loginBox.style.visibility="hidden";
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    regTab.style.backgroundColor="rgba(19, 226, 181, 0.82)";
    loginTab.style.backgroundColor="rgba(19, 226, 181, 0.82)";
}
function register()
{
    event.preventDefault();
    var email=document.getElementById("re").value
    var password=document.getElementById("rp").value
    var passowrRetype=document.getElementById("rrp").value
    if(email==""){
        alert("Email Required");
        return;
    }
    else if (password!==passwordReType){
        alert("Password don't match. Retype your Password");
        return;
    }
    else if (email.indexOf(email)==-1){
        emailArray
    }
}
function login()
{
    event.preventDefault();
    var email=document.getElementById("se").value
    var password=document.getElementById("sp").value
    var i=emailArray.indexOf(email);
    if(emailArray.indexOf(email)==-1){
        if (email==""){
            alert("Email Required");
            return;
        }
        else if(passwordArray[i]!=password){
            if (password==""){
                alert("Password required");
                return;
            }
            alert("Password does not match");
            return;
        }
    }  
    else{
        alert(`Welcome`+email);
        document.getElementById("se").value="";
        document.getElementById("sp").value="";
    } 
}
function forgot()
{
    event.preventDefault();
    var email = document.getElementById("fe").value;
    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
        alert("Email required");
        return;
        }
        alert("Email does not exist.");
        return;
    } else {
        alert("Check your mail for new password");
        document.getElementById("fe").value = "";
    }
}