var item= JSON.parse(localStorage.getItem("ProductDescription"));
console.log(item);

function display(){
    //main-image

    let mainimg=document.createElement("img");
    mainimg.src=item.image;

    document.getElementById("main-image").append(mainimg);

    //small-image2

    let smallimg2=document.createElement("img");
    smallimg2.src=item.image2;

    document.getElementById("small-image2").append(smallimg2);
    //small-image3

    let smallimg3=document.createElement("img");
    smallimg3.src=item.image3;

    document.getElementById("small-image3").append(smallimg3);
    //small-image4

    let smallimg4=document.createElement("img");
    smallimg4.src=item.image4;

    document.getElementById("small-image4").append(smallimg4);

    //whey proteins

    let category= document.createElement("p");
    category.textContent="Whey proteins";
    
    let title=document.createElement("h1");
    title.style.fontSize="23px";
    title.textContent=item.title;

    let type= document.createElement("h3");
    type.fontSize="16px";
    type.style.color="cyan";
    type.textContent="By : Muscle Blaze";

    //top-div1

    let topdiv1=document.createElement("div");
    topdiv1.id="topdiv1";
    let topdiv1innerleft=document.createElement("div");
    topdiv1innerleft.id="topdiv1innerleft";
    let topdiv1innerright=document.createElement("div");
    topdiv1innerright.id="topdiv1innerright";

    let ratimg=document.createElement("img");
    ratimg.id="ratimg";
    ratimg.src="data:image/jpeg;base64,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";
    
    let ratingp= document.createElement("p");
    ratingp.style.fontSize="14px";
    ratingp.style.fontWeight="500";
    ratingp.textContent=`${item.rating} (1,600 reviews)`

    //topdivinnerright

    let wishimg=document.createElement("img");
    wishimg.id="wishimg";
    wishimg.src="https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg";
    
    let shareimg=document.createElement("img");
    shareimg.id="shareimg";
    shareimg.src="https://static1.hkrtcdn.com/hknext/static/media/pdp/share_icon.svg";

    //topdiv2
    let topdiv2=document.createElement("div");
    topdiv2.id="topdiv2";

    let mrp= document.createElement("p");
    mrp.textContent=`MRP: ₹${item.strPrice}`;
    mrp.style.textDecoration="line-through";
    mrp.style.color="grey";

    topdiv2.append(mrp);
    //topdiv3

    let topdiv3=document.createElement("div");
    topdiv3.id="topdiv3";
    let topdiv3innerleft=document.createElement("div");
    topdiv3innerleft.id="topdiv3innerleft";


    let price= document.createElement("h2");
    price.textContent=`Price: ₹${item.price}`;
    price.style.fontSize="20px";
    price.style.fontWeight="600";
    let discount= document.createElement("h4");
    discount.textContent=`${item.discount}% off`;
    discount.style.fontSize="14px";


    
    topdiv3innerleft.append(price,discount);
    topdiv3.append(topdiv3innerleft);

    //topdiv4
    let topdiv4=document.createElement("div");
    topdiv4.id="topdiv4";


    let inc= document.createElement("p");
    inc.textContent="inclusive of all taxes";
    inc.style.fontSize="10px";
    inc.style.color="green";
    

    topdiv4.append(inc);

    //topdiv5

    let topdiv5=document.createElement("div");
    topdiv5.id="topdiv5";

    let pmpicon=document.createElement("img");
    pmpicon.src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg";

    let pmptext=document.createElement("p");
    pmptext.textContent=`₹${item.pmpPrice} for Premium Members  >`

    topdiv5.append(pmpicon,pmptext);

    //topdiv6

    let topdiv6=document.createElement("div");
    topdiv6.id="topdiv6";

    let text=document.createElement("p");
    text.textContent=`3 interest free payments of ₹1899.68 with    `

    let simpl=document.createElement("img");
    simpl.src="https://static1.hkrtcdn.com/hknext/static/media/logos/simpl.png";

    topdiv6.append(text,simpl)

    //topdiv7

    let topdiv7=document.createElement("div");
    topdiv7.id="topdiv7";

    let text1=document.createElement("p");
    text1.textContent=`- `;
    text1.id="text1";

    let text2=document.createElement("p");
    text2.textContent=`1  `;
    text2.id="text2";
    let text3=document.createElement("p");
    text3.textContent=`+ `;
    text3.id="text1";

    
    let topdiv7inner1=document.createElement("div");
    topdiv7inner1.id="topdiv7inner1";

    // topdiv7.append(topdiv7inner1);
    topdiv7inner1.append(text1,text2,text3);

    let cartBtn= document.createElement("button");
    cartBtn.id="cart-button";
    cartBtn.textContent="Add to Cart";
    // cartBtn.addEventListener("click", () => {
    //   addToCart(item);
    // });

    let quickBtn= document.createElement("button");
    quickBtn.id="quick-button";
    quickBtn.textContent="Quick Buy";
    // quickBtn.addEventListener("click", () => {
    //   quickbuy(item);
    // });


    topdiv7.append(topdiv7inner1, cartBtn, quickBtn);


    topdiv1innerleft.append(ratimg,ratingp);
    topdiv1innerright.append(wishimg,shareimg);
    topdiv1.append(topdiv1innerleft,topdiv1innerright);

    document.getElementById("right").append(category,title,type,topdiv1,topdiv2,topdiv3,topdiv4,topdiv5,topdiv6,topdiv7);
}

display();