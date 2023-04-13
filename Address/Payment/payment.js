import nav_bar from "../compo/New_navbar.js";

let nevbardiv=document.getElementById("Navbar-AddressPage");
nevbardiv.innerHTML = nav_bar();

let line=document.createElement("p");
line.innerHTML=`<i class="fa-solid fa-arrow-right fa-2xl" style="color: #1f5120;"></i>`;
document.getElementById("line").append(line);

document.getElementById("Address-icon").src="https://static1.hkrtcdn.com/hknext/static/media/checkout/fill-blue.svg";

let line2=document.createElement("p");
line2.innerHTML=`<i class="fa-solid fa-arrow-right fa-beat-fade fa-2xl" style="color: #1f5120;"></i>`;
document.getElementById("line-2").append(line2);

import footer_bar from "../compo/New_footer.js";
let footerbar=document.getElementById("footer-bar");
footerbar.innerHTML = footer_bar();


//container

    let dataArray=JSON.parse(localStorage.getItem("AddressData")) || [];
    let location=localStorage.getItem("location");
    // console.log(dataArray[dataArray.length-1]);
    // console.log(location);
    let data=dataArray[dataArray.length-1];
    let para=document.createElement("p");

    let img1=document.createElement("img");
    img1.src="https://static1.hkrtcdn.com/hknext/static/media/payment/location-address.svg";
    para.append(img1);
    para.textContent=`${location} ${data.address}, ${data.cityname}, ${data.stateName}, ${data.pincode}, Phone: ${data.mobile}`;
    document.getElementById("address-data").append(para);

    //
    document.getElementById("learnmore").addEventListener("click",learnmore);

    function learnmore(){

    }

// container2

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