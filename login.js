let crossbtn = document.getElementById("cross");
crossbtn.addEventListener("click", () => {
    window.location.href = "homepage.html"
});

var userData = JSON.parse(localStorage.getItem("users")) || [];



function Signup(e) {
    e.preventDefault(e);


    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("pass").value;

    let obj = {
        mobile: mobile,
        email: email,
        name: name

    };

    let errorMsg = document.getElementById("errortext");

    if (mobile.length == 10) {
        userData.push(obj);
        console.log(userData)
        localStorage.setItem("users", JSON.stringify(userData));
        alert("Account Created Successfully");
        window.location.href = "login.html";
    }
    else {
        errorMsg.innerText = "please enter phone number";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
    }

    // localStorage.setItem("users", JSON.stringify(userData));
}

var flag = true;


function login(Event) {

    Event.preventDefault()
    let x = document.querySelector("#user").value;

    console.log("working")


    if (x.length == 10) {
        let users = localStorage.getItem("users") || []
        let userArray = JSON.parse(users)
        let existingUser = false
        userArray.forEach(element => {
            if (element.mobile == x){
                localStorage.setItem("loginName",element.name);
                existingUser = true
            }
         });
        if(existingUser){
            window.location.href = "otp.html";
        } else{
            alert("Sign Up to Buy !")
            window.location.href = "signup.html";
        }
        
    }
    else {
        alert("invalid number")
    }

}

let tab1 = document.getElementById("tab-1");
tab1.addEventListener("click", () => {
    window.location.href = "login.html"
});

let tab2 = document.getElementById("tab-2");
tab2.addEventListener("click", () => {
    window.location.href = "signup.html"
});