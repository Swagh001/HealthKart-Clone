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
    // let alldata=document.getElementById("btn-data");
    let upi=document.getElementById("upi");
    // upi.style.display = "none";

    let Dcard=document.getElementById("Dcard");
    Dcard.style.display = "none";

    let Ccard=document.getElementById("Ccard");
    Ccard.style.display = "none";

    let simpl=document.getElementById("simpl");
    simpl.style.display = "none";

    let wallet=document.getElementById("wallet");
    wallet.style.display = "none";

    let int_bank=document.getElementById("int-bank");
    int_bank.style.display = "none";

    let emi=document.getElementById("emi");
    emi.style.display = "none";

    let cod=document.getElementById("cod");
    cod.style.display = "none";

    // btn-data
    // document.getElementById("pay-upi").addEventListener("click",function(){
    //     document.getElementById("btn-data").textContent="";
    //     let head=document.createElement("h3");
    //     head.textContent="Add a new UPI";

    //     let p1=document.createElement("p");
    //     p1.textContent="You need to have a registered UPI ID";
    //     p1.setAttribute("id","p1");

    //     let divpay=document.createElement("div");
    //     divpay.setAttribute("id","divpay");

    //     let inputupi=document.createElement("input");
    //     inputupi.className="inputField";
    //     inputupi.placeholder="Enter UPI ID";
    //     let btn=document.createElement("button");
    //     btn.innerHTML="Verify";
    //     divpay.append(inputupi,btn);

    //     let p2=document.createElement("p");
    //     p2.textContent="Securely saved for faster payments";

    //     let btndiv=document.createElement("div");
    //     btndiv.setAttribute("id","btndiv");

    //     let btn1=document.createElement("input");
    //     btn1.setAttribute("type","button");
    //     btn1.value="@oksbi";
    //     btn1.setAttribute("id","btnupi");

    //     let btn2=document.createElement("input");
    //     btn2.setAttribute("type","button");
    //     btn2.value="@okhdfc";

    //     let btn3=document.createElement("input");
    //     btn3.setAttribute("type","button");
    //     btn3.value="@okicici";

    //     let btn4=document.createElement("input");
    //     btn4.setAttribute("type","button");
    //     btn4.value="@okaxis";


    //     btndiv.append(btn1,btn2,btn3,btn4);

    //     let finalbtn=document.createElement("button");
    //     finalbtn.innerHTML="Securely pay"+final_Payment;


    //     document.getElementById("btn-data").append(head,p1,divpay,p2,btndiv,finalbtn);



        // btn1.addEventListener("click",function(){
        //     // btn1.setAttribute("id","btnupi");
        //     // console.log("ky ")
        //     inputupi.placeholder="@oksbi";
        // });
    // });

    // upi
    
    
    let Securely=document.getElementById("Securely");
    Securely.disabled = true;
    document.getElementById("pay-upi").addEventListener("click",function(){
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        simpl.style.display = "none";
        wallet.style.display="none";
        upi.style.display = "block";
        int_bank.style.display ="none";
        emi.style.display = "none";
        cod.style.display = "none";

        let btn1=document.getElementById("UPIbtn1");
        btn1.addEventListener("click",function(){
            // btn1.setAttribute("id","btnupi");
            // console.log("ky ")
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@oksbi";
        });

        let btn2=document.getElementById("UPIbtn2");
        btn2.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okicici";
        });

        let btn3=document.getElementById("UPIbtn3");
        btn3.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okhdfc";
        });

        let btn4=document.getElementById("UPIbtn4");
        btn4.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okaxis";
        });

        document.getElementById("verify").addEventListener("click",function(){
            Securely.disabled = false;
            Securely.style.color = "white";
            Securely.style.backgroundColor = "rgb(10, 177, 243)";
        });       
        Securely.addEventListener("click",function(){
            window.location.href="https://www.youtube.com/";
        })
    })
    


    let SecurelyDcard=document.getElementById("SecurelyDcard");
    SecurelyDcard.disabled=true;

    let count=0;
    document.getElementById("pay-Dcard").addEventListener("click",function(){
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "block";
        simpl.style.display = "none";
        wallet.style.display="none";
        int_bank.style.display ="none";
        emi.style.display = "none";
        cod.style.display = "none";

        // let name=document.getElementById("Dcardcardname").value;
        // let no=document.getElementById("Dcardcardno").value;
        // let my=document.getElementById("DcardMY").value;
        // let cvv=document.getElementById("Dcardcardcvv");
    })

    document.getElementById("pay-upi").addEventListener("click",function(){
        Dcard.style.display = "none";
        Ccard.style.display = "none";
        upi.style.display = "block";
        simpl.style.display = "none";

        let btn1=document.getElementById("UPIbtn1");
        btn1.addEventListener("click",function(){
            // btn1.setAttribute("id","btnupi");
            // console.log("ky ")
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@oksbi";
        });

        let btn2=document.getElementById("UPIbtn2");
        btn2.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okicici";
        });

        let btn3=document.getElementById("UPIbtn3");
        btn3.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okhdfc";
        });

        let btn4=document.getElementById("UPIbtn4");
        btn4.addEventListener("click",function(){
            let val=document.getElementById("inputUPI").value;
            document.getElementById("inputUPI").value=val+"@okaxis";
        });

        document.getElementById("verify").addEventListener("click",function(){
            Securely.disabled = false;
            Securely.style.color = "white";
            Securely.style.backgroundColor = "rgb(10, 177, 243)";
        });       
        Securely.addEventListener("click",function(){
            window.location.href="https://www.youtube.com/";
        })
    })
    

    document.getElementById("pay-Ccard").addEventListener("click",function(){
        upi.style.display = "none";
        // Ccard.style.display = "block";
        Dcard.style.display = "block";
        simpl.style.display = "none";
    })


    let cvv=document.getElementById("Dcardcardcvv");
        cvv.addEventListener("input",function(){
            count++;
            if(count===3){
                SecurelyDcard.disabled=false;
                SecurelyDcard.style.color = "white";
                SecurelyDcard.style.backgroundColor = "rgb(10, 177, 243)";
                console.log("golmal");
        
                SecurelyDcard.addEventListener("click",function(){
                    window.location.href="https://www.youtube.com/";
                })
            }
            else{
                console.log("yes")
            }
    })


    let SecurelySimpl=document.getElementById("SecurelySimpl");
    SecurelySimpl.disabled=true;

    document.getElementById("pay-simpl").addEventListener("click",function(){
        simpl.style.display = "block";
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        wallet.style.display="none";
        int_bank.style.display ="none";
        emi.style.display = "none";
        cod.style.display = "none";

        SecurelySimpl.disabled = false;
        SecurelySimpl.style.color = "white";
        SecurelySimpl.style.backgroundColor = "rgb(10, 177, 243)";

        SecurelySimpl.addEventListener("click",function(){
            window.location.href="https://www.youtube.com/";
        })
    })


    document.getElementById("pay-wallet").addEventListener("click",function(){
        simpl.style.display = "none";
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        wallet.style.display="block"
        int_bank.style.display ="none";
        emi.style.display = "none";
        cod.style.display = "none";
    })


    document.getElementById("pay-int-bank").addEventListener("click",function(){
        simpl.style.display = "none";
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        wallet.style.display="none";
        int_bank.style.display ="block";
        emi.style.display = "none";
        cod.style.display = "none";
    })

    // 
    document.getElementById("pay-emi").addEventListener("click",function(){
        simpl.style.display = "none";
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        wallet.style.display="none";
        int_bank.style.display ="none";
        emi.style.display = "block";
        cod.style.display = "none";

        document.getElementById("imgdata").addEventListener("click",function(){
            document.getElementById("imgdata").src="emi_r.jpg";
        })
    })


    let Confirm_Order=document.getElementById("Confirm_Order");
    Confirm_Order.disabled=true;
    document.getElementById("pay-cod").addEventListener("click",function(){
        simpl.style.display = "none";
        upi.style.display = "none";
        Ccard.style.display = "none";
        Dcard.style.display = "none";
        wallet.style.display="none";
        int_bank.style.display ="none";
        emi.style.display = "none";
        cod.style.display = "block";

        document.getElementById("codimg").addEventListener("click",function(){
            document.getElementById("codimg").src="COD_2.jpg";
            Confirm_Order.disabled=false;
            Confirm_Order.style.color = "white";
            Confirm_Order.style.backgroundColor = "rgb(10, 177, 243)";

            Confirm_Order.addEventListener("click",function(){
                window.location.href="https://www.youtube.com/"
            })
        })
    })

    


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

