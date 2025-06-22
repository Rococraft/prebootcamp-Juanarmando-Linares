
function validateForm() {
    var id = document.getElementById("ID").value;
    var email = document.getElementById("email").value;
    alert(id+". Hemos recibido tu mensaje. Te contactaremos pronto, en el correo: " + email + ".");
}

// This script sets the styles for various elements in a form
document.getElementById("ID").style.height = "20px";
document.getElementById("ID").style.width = "150px";
document.getElementById("ID").style.backgroundColor = "white";
document.getElementById("ID").style.border = "2px solid black";
document.getElementById("ID").style.borderRadius = "10px";

document.getElementById("email").style.height = "20px";
document.getElementById("email").style.width = "150px";
document.getElementById("email").style.backgroundColor = "white";
document.getElementById("email").style.border = "2px solid black";
document.getElementById("email").style.borderRadius = "10px";

document.getElementById("message").style.height = "150px";
document.getElementById("message").style.width = "600px";
document.getElementById("message").style.backgroundColor = "white";
document.getElementById("message").style.border = "2px solid black";
document.getElementById("message").style.borderRadius = "10px";3




