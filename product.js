
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
          addToCart(products)
            cartBtn.textContent="Added to Cart";
           
            console.log(count);
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
  // let count=0;
  let count=0;
  function addToCart(products){
    count+=1;
    if(count>1){
      alert("Already added to Cart");
      return;
    }
    cartArray.push(products);
    localStorage.setItem("cartItem",JSON.stringify(cartArray));
    // count+=1;
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

  function filter1(){
    let urlf1="http://localhost:3000/products?discount_gte=10&discount_lte=15";
    getdata(urlf1);
  }
  function filter2(){
    let urlf2="http://localhost:3000/products?discount_gte=15&discount_lte=20";
    getdata(urlf2);
  }
  function filter3(){
    let urlf3="http://localhost:3000/products?discount_gte=20&discount_lte=25";
    getdata(urlf3);
  }
  function filter4(){
    let urlf4="http://localhost:3000/products?price_gte=1&price_lte=1500";
    getdata(urlf4);
  }
  function filter5(){
    let urlf1="http://localhost:3000/products?price_gte=1&price_lte=1499";
    getdata(urlf1);
  }
  function filter6(){
    let urlf2="http://localhost:3000/products?price_gte=1500&price_lte=4000";
    getdata(urlf2);
  }
  function filter7(){
    let urlf3="http://localhost:3000/products?price_gte=4000&price_lte=8000";
    getdata(urlf3);
  }
  function filter8(){
    let urlf4="http://localhost:3000/products?price_gte=8000&price_lte=15000";
    getdata(urlf4);
  }
  function filter9(){
    let urlf4="http://localhost:3000/products?rating_gte=4&rating_lte=5";
    getdata(urlf4);
  }
  function filter10(){
    let urlf4="http://localhost:3000/products?rating_gte=3&rating_lte=3.9";
    getdata(urlf4);
  }
  function filter11(){
    let urlf4="http://localhost:3000/products?rating_gte=2&rating_lte=2.9";
    getdata(urlf4);
  }
  function filter12(){
    let urlf4="http://localhost:3000/products?rating_gte=1&rating_lte=1.9";
    getdata(urlf4);
  }

  //Debouncingf-search bar
  
//   async function main(){
//     let data= await getData();

//     if(!data){
//         return false;
//     }

//     displayData(data);
// }
// let timerId;
// function debounce(main, delay){
//   console.log("search-bar inp")
//     if(timerId){
//         clearTimeout(timerId)
//     }
//     timerId= setTimeout(function (){
//         main();
//     },delay)
// }

// async function getData(){
//   try{
//    let searchParam=document.getElementById("search-inp").value;
//    let res= await fetch(`http://localhost:3000/products?q=${searchParam}`);
//    let data= await res.json();

//    console.log(data);
//    return data;
//   }catch(error){
//    console.log(error);
//   }
// }

// function displayData(data){
//   let movie_container=document.getElementById("searchbox");
//   movie_container.innerHTML="";

//  data.map((movies) =>{
//   let p=document.createElement("p");
//   p.textContent=movies.title;
//   p.addEventListener("click", function() {
//       display(movies);
//   })

//   movie_container.append(p);
//  })
// }

