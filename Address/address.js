import nav_bar from "./compo/New_navbar.js";

let nevbardiv=document.getElementById("Navbar-AddressPage");
nevbardiv.innerHTML=nav_bar();


document.querySelector("form").addEventListener("submit",submit);
let AddressArr= JSON.parse(localStorage.getItem("AddressData")) || [];
function submit(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let address=document.getElementById("address").value;
    let landmark=document.getElementById("landmark").value;
    let pincode=document.getElementById("pincode").value;

    console.log("hello"+name);

    let addressObj={
        name:name,
        mobile:mobile,
        address:address,
        landmark:landmark,
        pincode:pincode,
    };

    AddressArr.push(addressObj);
    
    localStorage.setItem("AddressData",JSON.stringify(AddressArr));
}
let home=document.querySelector(".btn-1");
let office=document.querySelector(".btn-2");
let other=document.querySelector(".btn-3");

if(home.addEventListener("click",addressSelect)){}
else if(office.addEventListener("click",addressSelect2)){}
else if(other.addEventListener("click",addressSelect3)){}


function addressSelect(){
    var selectedBtn2=document.querySelector(".btn-2");
    selectedBtn2.style.backgroundColor="white";
    var selectedBtn3=document.querySelector(".btn-3");
    selectedBtn3.style.backgroundColor="white";

    var selectedBtn=document.querySelector(".btn-1");
    selectedBtn.style.backgroundColor="rgb(216, 214, 214)";
    console.log(selectedBtn.value);
}

function addressSelect2(){
    var selectedBtn=document.querySelector(".btn-1");
    selectedBtn.style.backgroundColor="white";
    var selectedBtn3=document.querySelector(".btn-3");
    selectedBtn3.style.backgroundColor="white";

    var selectedBtn2=document.querySelector(".btn-2");
    selectedBtn2.style.backgroundColor="rgb(216, 214, 214)";
    console.log(selectedBtn2.value);
}

function addressSelect3(){
    var selectedBtn=document.querySelector(".btn-1");
    selectedBtn.style.backgroundColor="white";
    var selectedBtn2=document.querySelector(".btn-2");
    selectedBtn2.style.backgroundColor="white";

    var selectedBtn3=document.querySelector(".btn-3");
    selectedBtn3.style.backgroundColor="rgb(216, 214, 214)";
    console.log(selectedBtn3.value);

    let new_div=document.createElement("div");
    new_div.setAttribute("id","newinput")
    let new_input=document.createElement("input");
    new_input.setAttribute("id","new_input_1");
    new_input.placeholder="Eg: Friend's Place";
    new_div.append(new_input);
    document.getElementById("newInut-1").append(new_div)
}

let mrp = document.getElementById("mrp");
let discounts= document.getElementById("discounts");
let final_Payment=document.getElementById("final-payment");

// console.log(typeof(mrp.textContent));

discounts=discounts.textContent=1500;
discounts=Number(discounts);

let finalValue=mrp.textContent;
finalValue=Number(finalValue)-discounts;
console.log(typeof(finalValue));
final_Payment.textContent=finalValue;
