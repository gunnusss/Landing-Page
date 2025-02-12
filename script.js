
console.log("help")
function validating(){
    let name=document.querySelector("#name");
let number=document.querySelector("#number");
let email=document.querySelector("#email");


if(name.value=="" || number.value=="" || email.value==""){
    alert("All Fields are mandatory")
    return false;
}else if(number.length>10 || number.length<10){
    alert("Number must be of 10 digits");
    return false;
}else {
     true;
}
}


