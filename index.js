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
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if (email == "") {
      alert("Email required");
      return;
    } else if (password == "") {
      alert("Password required");
      return;
    } else if (passwordRetype == "") {
      alert("Re enter Password required");
      return;
    } else if (password != passwordRetype) {
      alert("Password doesn't match \nRe enter your password");
      return;
    } else if (emailArray.indexOf(email) == -1) {
      emailArray.push(email);
      passwordArray.push(password);
  
      alert(email + "  Thanks for the registration. \nyou can login now");
      document.getElementById("re").value = "";
      document.getElementById("rp").value = "";
      document.getElementById("rrp").value = "";
    }
}
function login()
{
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
        alert("Email required");
        return;
        }
        alert("Email does not exist.");
        return;
    } else if (passwordArray[i] != password) {
        if (password == "") {
        alert("Password required");
        return;
        }
        alert("Password does not match.");
    } else {
        alert(email + " Login successful.. Welcome..");
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
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