import nav_bar from "./compo/New_navbar.js";

let nevbardiv=document.getElementById("Navbar-AddressPage");
nevbardiv.innerHTML = nav_bar();

// for cart 
{/* <i class="fa-sharp fa-solid fa-badge-check" style="color: #1f5122;"></i><i class="fa-sharp fa-solid fa-badge-check" style="color: #1f5122;"></i> */}

let scroll=document.createElement("img");
scroll.src="../images/nav_2.jpg";
document.getElementById("navbar-container-2").append(scroll);

// let line=document.createElement("p");
// line.innerHTML=`<i class="fa-solid fa-arrow-right fa-beat-fade fa-2xl" style="color: #1f5120;"></i>`;
// document.getElementById("line").append(line);
// // document.getElementById("Address-icon").style.backgroundColor="blue";

import footer_bar from "./compo/New_footer.js";
let footerbar=document.getElementById("footer-bar");
footerbar.innerHTML = footer_bar();




// body
let count=0;
var newcity_1=document.createElement("input");
var newstate_1=document.createElement("input");
document.getElementById("pincode").oninput=function(){
    count++;
    if(count===6){
        // console.log("hello");
        var city_div=document.createElement("div");
        city_div.setAttribute("id","city_div");

        var label_1=document.createElement("label");
        label_1.textContent="City";
        
        // newcity_1.setAttribute("id","city_div");
        newcity_1.placeholder="Eg: MUMBAI";
        newcity_1.className="inputField";
    

        city_div.append(label_1,newcity_1);

        var state_div=document.createElement("div");
        state_div.setAttribute("id","state_div");

        var label_2=document.createElement("label");
        label_2.textContent="State";
        
        newstate_1.placeholder="Eg: MAHARASHTRA";
        newstate_1.className="inputField";

        state_div.append(label_2,newstate_1)
        

        document.getElementById("newinput-3").append(city_div,state_div);
        
    }
}


document.querySelector("form").addEventListener("submit",submit);
let AddressArr= JSON.parse(localStorage.getItem("AddressData")) || [];
function submit(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let address=document.getElementById("address").value;
    let landmark=document.getElementById("landmark").value;
    let pincode=document.getElementById("pincode");

    // let city=document.getElementById("")    
    pincode=pincode.value;

    console.log("hello"+name);

    let addressObj={
        name:name,
        mobile:mobile,
        address:address,
        landmark:landmark,
        pincode:pincode,
        cityname:newcity_1.value,
        stateName:newstate_1.value
    };

    AddressArr.push(addressObj);
    
    localStorage.setItem("AddressData",JSON.stringify(AddressArr));
    location.assign("./Payment/payment.html");
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
    let Home_office_friend= localStorage.setItem("location","Home");
}

function addressSelect2(){
    var selectedBtn=document.querySelector(".btn-1");
    selectedBtn.style.backgroundColor="white";
    var selectedBtn3=document.querySelector(".btn-3");
    selectedBtn3.style.backgroundColor="white";

    var selectedBtn2=document.querySelector(".btn-2");
    selectedBtn2.style.backgroundColor="rgb(216, 214, 214)";
    console.log(selectedBtn2.value);
    let Home_office_friend= localStorage.setItem("location","office");
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
    document.getElementById("newInut-1").append(new_div);

    let Home_office_friend= localStorage.setItem("location","Friend");
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
final_Payment.textContent="₹ "+finalValue;

