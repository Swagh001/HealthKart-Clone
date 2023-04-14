import nav_bar from "../compo/New_navbar.js";

let nevbardiv=document.getElementById("Navbar-AddressPage");
nevbardiv.innerHTML = nav_bar();

// let line=document.createElement("p");
// line.innerHTML=`<i class="fa-solid fa-arrow-right fa-2xl" style="color: #1f5120;"></i>`;
// document.getElementById("line").append(line);

// document.getElementById("Address-icon").src="https://static1.hkrtcdn.com/hknext/static/media/checkout/fill-blue.svg";

// let line2=document.createElement("p");
// line2.innerHTML=`<i class="fa-solid fa-arrow-right fa-beat-fade fa-2xl" style="color: #1f5120;"></i>`;
// document.getElementById("line-2").append(line2);

let scroll=document.createElement("img");
scroll.src="/images/nav_3.jpg";
document.getElementById("navbar-container-2").append(scroll);

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

    
    document.getElementById("learnmore").addEventListener("click",learnmore);

    function learnmore(){
        // alert("hello")
    }


    // all buttons
    
    // btn-data
    document.getElementById("pay-upi").addEventListener("click",function(){
        document.getElementById("btn-data").textContent="";
        let head=document.createElement("h3");
        head.textContent="Add a new UPI";

        let p1=document.createElement("p");
        p1.textContent="You need to have a registered UPI ID";
        p1.setAttribute("id","p1");

        let divpay=document.createElement("div");
        divpay.setAttribute("id","divpay");

        let inputupi=document.createElement("input");
        inputupi.className="inputField";
        inputupi.placeholder="Enter UPI ID";
        let btn=document.createElement("button");
        btn.innerHTML="Verify";
        divpay.append(inputupi,btn);

        let p2=document.createElement("p");
        p2.textContent="Securely saved for faster payments";

        let btndiv=document.createElement("div");
        btndiv.setAttribute("id","btndiv");

        let btn1=document.createElement("input");
        btn1.setAttribute("type","button");
        btn1.value="@oksbi";
        btn1.setAttribute("id","btnupi");

        let btn2=document.createElement("input");
        btn2.setAttribute("type","button");
        btn2.value="@okhdfc";

        let btn3=document.createElement("input");
        btn3.setAttribute("type","button");
        btn3.value="@okicici";

        let btn4=document.createElement("input");
        btn4.setAttribute("type","button");
        btn4.value="@okaxis";


        btndiv.append(btn1,btn2,btn3,btn4);

        let finalbtn=document.createElement("button");
        finalbtn.innerHTML="Securely pay"+final_Payment;


        document.getElementById("btn-data").append(head,p1,divpay,p2,btndiv,finalbtn);



        btn1.addEventListener("click",function(){
            // btn1.setAttribute("id","btnupi");
            // console.log("ky ")
            inputupi.placeholder="@oksbi";
        });
    });






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

