var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
firstName.onkeyup = function(){
    if(firstName.value.length>=2){
        lastName.disabled = false
    }
    else if(firstName.value.length<2){
        lastName.disabled = true
    }
    
}
var password = document.getElementById("pass")
var y = document.getElementById("passSpan")

password.onkeyup = function(){
  if(password.value.length >0 && password.value.length < 6){
    y.textContent = "weak"
}
else if(password.value.length >=6 && password.value.length < 10){
  y.textContent = "medium"
}
else if(password.value.length >=10){
  y.textContent = "strong"
}
else{
    y.textContent = " "
}

}
var z = document.getElementById("passButton")
z.onclick = function(){
    if(password.type == "text"){
    z.textContent = "Show"
    password.type = "password"
    }
    else if(password.type == "password"){
      
        z.textContent = "Hide"
        password.type = "text"
  }
}

function vForm(){
    if(firstName.value.length<2 || lastName.value.length<2){
        alert("Please enter a valid name")
    }
    var email = document.myForm.email.value;
    var atindex = email.indexOf("@");
    var dotindex = email.lastIndexOf(".");
    if (atindex < 4 || dotindex - atindex < 3 || email.length - dotindex < 3) {
        alert("Invalid E-Mail");
        return false;
    }
    var age = document.getElementById("age").value
    if(age<19){
        alert("Age must be at least 19")
    }
    var textArea = document.getElementById("textArea").value
    if(textArea.length<20){
        alert("Your Message must be at least 20 characters")
    }
    
}
function fileValidation(){
    var input = document.getElementById("file")
    var filePath = input.value;
    var allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type, only pdfs allowed');
        fileInput.value = '';
        return false;
    }
 }
