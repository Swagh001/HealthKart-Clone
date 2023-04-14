
let url= "http://localhost:3000/products";

async function getdata(url){
try{
  let res= await fetch(url);
  let data= await res.json();
  // console.log(data);
  display(data);

}catch(error){
  console.log(error);
}

}
getdata(url);




  function display(data){
    document.getElementById("product-list").innerHTML="";

    data.map((products) => {


        let prodiv= document.createElement("div");
        prodiv.id="prodiv";
      

        let prodivtop= document.createElement("div");
        prodivtop.id="prodivtop";
        prodivtop.addEventListener("click", () => {
          proDesc(products);
        })



        let heartdiv= document.createElement("div");
        heartdiv.id="heartdiv";

        let heartimg = document.createElement("img");
        heartimg.id = "heartimg";
        heartimg.src =
          "https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/whistlist.svg";

        let prodimg=document.createElement("img");
        prodimg.id="prodimg";
        prodimg.src=products.image;

        prodivtop.append(heartdiv,prodimg)
        heartdiv.append(heartimg);
        
       


        //BOTTOM DIV-- Product Div

        let prodivbottom= document.createElement("div");
        prodivbottom.id="prodivbottom";


        //Rating div
        let prodivbottom1= document.createElement("div");
        prodivbottom1.id="prodivbottom1";


        let ratingreviewdiv= document.createElement("div");
        ratingreviewdiv.id="ratingreviewdiv";

        let ratingdiv= document.createElement("div");
        ratingdiv.id="ratingdiv";

        let ratingp= document.createElement("p");
        ratingp.textContent=products.rating;
        

        let ratingimg= document.createElement("img");
        ratingimg.src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg";

        //Review div

        let reviewp= document.createElement("p");
        reviewp.textContent=`${products.ratingQ} reviews`;



        


        //veg image

         let vegimg=document.createElement("img");
        vegimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1yUU0RvY44r9bS4_A8McYfu6Igno-loyWA&usqp=CAU";
        vegimg.id="vegimg";



        

        //bottomdiv2

        let prodivbottom2= document.createElement("div");
        prodivbottom2.id="prodivbottom2";

        let prodName=document.createElement("p");
        prodName.textContent=products.title;
        // console.log(products.title);

        //bottomdiv3(price div)

        let prodivbottom3= document.createElement("div");
        prodivbottom3.id="prodivbottom3";

        let price= document.createElement("p");
        price.textContent=products.price;
        price.id="price";


        let strprice= document.createElement("p");
        strprice.id="strprice";

        strprice.textContent=products.strPrice;

        let discount= document.createElement("p");
        discount.id="discount";
        discount.textContent=products.discount+"% off";

        prodivbottom3.append(price, strprice, discount);

        //PMP div

        let prodivbottom4=document.createElement("div");
        prodivbottom4.id="prodivbottom4";

        let pmpicon=document.createElement("img");
        pmpicon.src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg";

        let pmptext=document.createElement("p");
        pmptext.textContent=`₹${products.pmpPrice} for Premium Members`

        prodivbottom4.append(pmpicon,pmptext);

        //Add to cart Button

        let cartBtn= document.createElement("button");
        cartBtn.id="cart-button";
        cartBtn.textContent="Add to Cart";
        cartBtn.addEventListener("click", () => {
          addToCart(products);
          cartBtn.textContent="Added to Cart"
        });
        // cartBtn.append(icon);
        let icon=document.createElement("img");
        icon.src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg";

        

        ratingdiv.append(ratingp, ratingimg);
        ratingreviewdiv.append(ratingdiv, reviewp);

        prodivbottom1.append(ratingreviewdiv, vegimg);
        prodivbottom2.append(prodName);

        prodivbottom.append(prodivbottom1, prodivbottom2, prodivbottom3,prodivbottom4,cartBtn);
        prodiv.append(prodivtop,prodivbottom);
        document.getElementById("product-list").append(prodiv);
    })

  }

  
  let cartArray=JSON.parse(localStorage.getItem("cartItem")) || [];

  function addToCart(products){
    cartArray.push(products);
    localStorage.setItem("cartItem",JSON.stringify(cartArray));

  }

  function proDesc(products){
  localStorage.setItem("ProductDescription", JSON.stringify(products));
  window.location.href="prodata.html";

  }

  function sortPrice(){
    let sp=document.getElementById("sorting").value;
    console.log(sp);
    let urs="";
    if(sp=="lth"){

    urls=`http://localhost:3000/products?_sort=price&_order=asc`;
    }
    else  if (sp=="htl"){
     urls=`http://localhost:3000/products?_sort=price&_order=desc`;
    }
    else{
      urls="http://localhost:3000/products";
    }
    getdata(urls);
  }


  // display(productArray);