function productObj(
    discount,
    image,
    image2,
    image3,
    image4,
    title,
    rating,
    ratingQ,
    price,
    strPrice,
    pmpPrice
  ) {
    this.discount = discount;
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.title = title;
    this.rating = rating;
    this.ratingQ = ratingQ;
    this.price = price;
    this.strPrice = strPrice;
    this.pmpPrice = pmpPrice;
  }
  
  var a = new productObj(
    28,
    "https://img1.hkrtcdn.com/26624/prd_2662310-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg",
    "https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg",
    "https://img10.hkrtcdn.com/12090/prd_1208909-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg",
    "https://img10.hkrtcdn.com/12090/prd_1208909-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg",
    "MuscleBlaze Biozyme Performance Whey, 4.4 lb, Rich Chocolate",
    4.5,
    "2.8k",
    4399,
    6149,
    4267
  );
  var b = new productObj(
    32,
    "https://img7.hkrtcdn.com/16989/prd_1698896-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg",
    "https://img7.hkrtcdn.com/17182/prd_1718116-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg",
    "https://img2.hkrtcdn.com/14146/prd_1414551-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg",
    "https://img2.hkrtcdn.com/14146/prd_1414551-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg",
    "MB Fuel One Whey Protein Immunity+, 8.8 lb, Chocolate",
    4.1,
    "2.6k",
    6899,
    10149,
    6692
  );
  var c = new productObj(
    30,
    "https://img3.hkrtcdn.com/18797/prd_1879652-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18797/prd_1879652-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18797/prd_1879652-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18797/prd_1879652-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_o.jpg",
    "ON  Gold Standard 100% Whey Protein, 5 lb, Double Rich Chocolate",
    4.2,
    "2.4k",
    6785,
    8099,
    6581
  );
  var d = new productObj(
    27,
    "https://img3.hkrtcdn.com/18457/prd_1845622-MuscleTech-Nitro-Tech-Whey-Protein-4.4-lb-Milk-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18457/prd_1845622-MuscleTech-Nitro-Tech-Whey-Protein-4.4-lb-Milk-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18457/prd_1845622-MuscleTech-Nitro-Tech-Whey-Protein-4.4-lb-Milk-Chocolate_o.jpg",
    "https://img3.hkrtcdn.com/18457/prd_1845622-MuscleTech-Nitro-Tech-Whey-Protein-4.4-lb-Milk-Chocolate_o.jpg",
    "MuscleTech NitroTech Whey Protein, 4.4 lb, Milk Chocolate - India",
    4.7,
    "8.1k",
    6299,
    6999,
    5984,
    5894
  );
  let e = new productObj(
    27,
    "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_m.jpg",
    "MuscleBlaze Whey Gold Protein, 4.4 lb, Rich Milk Chocolate",
    4.5,
    "1.9k",
    6299,
    8669,
    6110
  );
  let f = new productObj(
    30,
    "https://img8.hkrtcdn.com/13144/prd_1314337-MB-Fuel-One-Whey-Protein-Immunity-4.4-lb-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/13144/prd_1314337-MB-Fuel-One-Whey-Protein-Immunity-4.4-lb-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/13144/prd_1314337-MB-Fuel-One-Whey-Protein-Immunity-4.4-lb-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/13144/prd_1314337-MB-Fuel-One-Whey-Protein-Immunity-4.4-lb-Chocolate_c_m.jpg",
    "MB Fuel One Whey Protein Immunity+, 4.4 lb, Chocolate",
    4.4,
    "1.1k",
    3599,
    5199,
    3491
  );
  let g = new productObj(
    17,
    "https://img1.hkrtcdn.com/26624/prd_2662310-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg",
    "https://img1.hkrtcdn.com/1691/prd_169080_o.jpg",
    "https://img1.hkrtcdn.com/1691/prd_169080_o.jpg",
    "https://img1.hkrtcdn.com/1691/prd_169080_o.jpg",
    "Ultimate Nutrition Prostar 100% Whey Protein, 5.28 lb, Chocolate Creme",
    4.6,
    "2.3k",
    5749,
    6999,
    5462
  );
  let h = new productObj(
    28,
    "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_m.jpg",
    "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_m.jpg",
    "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_m.jpg",
    "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_m.jpg",
    "MuscleBlaze Biozyme Performance Whey, 4.4 lb, Chocolate Hazelnut",
    4.5,
    1583,
    4399,
    6149,
    4237
  );
  let i = new productObj(
    15,
    "https://img10.hkrtcdn.com/12133/prd_1213299-MuscleBlaze-Raw-Whey-Protein-2.2-lb-Unflavoured_c_m.jpg",
    "https://img10.hkrtcdn.com/12133/prd_1213299-MuscleBlaze-Raw-Whey-Protein-2.2-lb-Unflavoured_c_m.jpg",
    "https://img10.hkrtcdn.com/12133/prd_1213299-MuscleBlaze-Raw-Whey-Protein-2.2-lb-Unflavoured_c_m.jpg",
    "https://img10.hkrtcdn.com/12133/prd_1213299-MuscleBlaze-Raw-Whey-Protein-2.2-lb-Unflavoured_c_m.jpg",
    "MuscleBlaze Raw Whey Protein, 2.2 lb, Unflavoured",
    4.5,
    1990,
    1699,
    1999,
    1648
  );
  let j = new productObj(
    10,
    "https://img4.hkrtcdn.com/12135/prd_1213413-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Ice-Cream-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/12135/prd_1213413-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Ice-Cream-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/12135/prd_1213413-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Ice-Cream-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/12135/prd_1213413-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Ice-Cream-Chocolate_c_m.jpg",
    "MuscleBlaze Biozyme Whey Protein, 4.4 lb, Ice Cream Chocolate",
    4.5,
    1432,
    5399,
    5999,
    5273
  );
  let k = new productObj(
    22,
    "https://img1.hkrtcdn.com/18137/prd_1813600-Myprotein-Impact-Whey-Protein-5.5-lb-Chocolate-Smooth_o.jpg",
    "https://img1.hkrtcdn.com/18137/prd_1813600-Myprotein-Impact-Whey-Protein-5.5-lb-Chocolate-Smooth_o.jpg",
    "https://img1.hkrtcdn.com/18137/prd_1813600-Myprotein-Impact-Whey-Protein-5.5-lb-Chocolate-Smooth_o.jpg",
    "https://img1.hkrtcdn.com/18137/prd_1813600-Myprotein-Impact-Whey-Protein-5.5-lb-Chocolate-Smooth_o.jpg",
    "Myprotein Impact Whey Protein, 5.5 lb, Chocolate Smooth",
    4.2,
    498,
    6995,
    6999,
    6111
  );
  let l = new productObj(
    20,
    "https://img8.hkrtcdn.com/12197/prd_1219657-MusclePharm-Combat-100-Whey-5-lb-Chocolate-Milk_c_m.jpg",
    "https://img8.hkrtcdn.com/12197/prd_1219657-MusclePharm-Combat-100-Whey-5-lb-Chocolate-Milk_c_m.jpg",
    "https://img8.hkrtcdn.com/12197/prd_1219657-MusclePharm-Combat-100-Whey-5-lb-Chocolate-Milk_c_m.jpg",
    "https://img8.hkrtcdn.com/12197/prd_1219657-MusclePharm-Combat-100-Whey-5-lb-Chocolate-Milk_c_m.jpg",
    "MusclePharm Combat 100% Whey, 5 lb, Chocolate Milk",
    4.3,
    24,
    5978,
    7499,
    5679
  );
  let m = new productObj(
    16,
    "https://img9.hkrtcdn.com/18797/prd_1879608-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/18797/prd_1879608-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/18797/prd_1879608-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/18797/prd_1879608-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_c_m.jpg",
    "ON (Optimum Nutrition) Gold Standard 100% Whey Protein, 2 lb, Double Rich Chocolate",
    4.5,
    2679,
    3173,
    3799,
    3078
  );
  let n = new productObj(
    10,
    "https://img4.hkrtcdn.com/14912/prd_1491113-Dymatize-Elite-100-Whey-Protein-5-lb-Rich-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14912/prd_1491113-Dymatize-Elite-100-Whey-Protein-5-lb-Rich-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14912/prd_1491113-Dymatize-Elite-100-Whey-Protein-5-lb-Rich-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14912/prd_1491113-Dymatize-Elite-100-Whey-Protein-5-lb-Rich-Chocolate_c_m.jpg",
    "Dymatize Elite 100% Whey Protein, 5 lb, Rich-Chocolate",
    4.2,
    374,
    8499,
    7598,
    7218
  );
  let o = new productObj(
    26,
    "https://img9.hkrtcdn.com/16151/prd_1615078-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/16151/prd_1615078-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/16151/prd_1615078-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_c_m.jpg",
    "https://img9.hkrtcdn.com/16151/prd_1615078-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_c_m.jpg",
    "MuscleBlaze Biozyme Performance Whey, 8.8 lb, Rich Chocolate",
    4.5,
    839,
    8299,
    11249,
    8059
  );
  let p = new productObj(
    30,
    "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_m.jpg",
    "MuscleBlaze Whey Gold with Digezyme, 8.8 lb, Rich Milk Chocolate",
    4.6,
    94,
    10899,
    15699,
    10572
  );
  let q = new productObj(
    28,
    "https://img5.hkrtcdn.com/18027/prd_1802634-MuscleBlaze-Biozyme-Performance-Whey-1.87-lb-Triple-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18027/prd_1802634-MuscleBlaze-Biozyme-Performance-Whey-1.87-lb-Triple-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18027/prd_1802634-MuscleBlaze-Biozyme-Performance-Whey-1.87-lb-Triple-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18027/prd_1802634-MuscleBlaze-Biozyme-Performance-Whey-1.87-lb-Triple-Chocolate_c_m.jpg",
    "MuscleBlaze Biozyme Performance Whey, 1.87 lb, Triple Chocolate",
    4.5,
    1593,
    1999,
    2799,
    1939
  );
  let r = new productObj(
    27,
    "https://img8.hkrtcdn.com/10629/prd_1062867-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Mocha-Cappuccino_c_m.jpg",
    "https://img8.hkrtcdn.com/10629/prd_1062867-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Mocha-Cappuccino_c_m.jpg",
    "https://img8.hkrtcdn.com/10629/prd_1062867-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Mocha-Cappuccino_c_m.jpg",
    "https://img8.hkrtcdn.com/10629/prd_1062867-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Mocha-Cappuccino_c_m.jpg",
    "MuscleBlaze Whey Gold Protein, 4.4 lb, Mocha Cappuccino",
    4.5,
    1897,
    6299,
    8669,
    6110
  );
  let s = new productObj(
    14,
    "https://img5.hkrtcdn.com/18796/prd_1879524-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-1-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18796/prd_1879524-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-1-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18796/prd_1879524-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-1-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img5.hkrtcdn.com/18796/prd_1879524-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-1-lb-Double-Rich-Chocolate_c_m.jpg",
    "ON (Optimum Nutrition) Gold Standard 100% Whey Protein, 1 lb, Double Rich Chocolate",
    4.5,
    2779,
    1723,
    1839,
    1700
  );
  let t = new productObj(
    13,
    "https://img8.hkrtcdn.com/12169/prd_1216867-MuscleBlaze-Biozyme-Whey-Protein-0.66-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/12169/prd_1216867-MuscleBlaze-Biozyme-Whey-Protein-0.66-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/12169/prd_1216867-MuscleBlaze-Biozyme-Whey-Protein-0.66-lb-Rich-Milk-Chocolate_c_m.jpg",
    "https://img8.hkrtcdn.com/12169/prd_1216867-MuscleBlaze-Biozyme-Whey-Protein-0.66-lb-Rich-Milk-Chocolate_c_m.jpg",
    "MuscleBlaze Biozyme Whey Protein, 0.073 lb, Rich Milk Chocolate",
    4.2,
    120,
    129,
    299,
    120
  );
  let u = new productObj(
    19,
    "https://img6.hkrtcdn.com/15136/prd_1513585-Nakpro-Perform-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/15136/prd_1513585-Nakpro-Perform-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/15136/prd_1513585-Nakpro-Perform-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/15136/prd_1513585-Nakpro-Perform-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_m.jpg",
    "Nakpro Perform Whey Protein Concentrate, 2.2 lb, Chocolate",
    4.5,
    523,
    1233,
    1599,
    1222
  );
  let v = new productObj(
    25,
    "https://img4.hkrtcdn.com/14630/prd_1462993-XLR8-Flavoured-Whey-Protein-24-g-Protein-2-lb-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14630/prd_1462993-XLR8-Flavoured-Whey-Protein-24-g-Protein-2-lb-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14630/prd_1462993-XLR8-Flavoured-Whey-Protein-24-g-Protein-2-lb-Chocolate_c_m.jpg",
    "https://img4.hkrtcdn.com/14630/prd_1462993-XLR8-Flavoured-Whey-Protein-24-g-Protein-2-lb-Chocolate_c_m.jpg",
    "XLR8 Flavoured Whey Protein 24 g Protein, 2 lb, Chocolate",
    4.8,
    4232,
    1777,
    1888,
    1700
  );
  let w = new productObj(
    30,
    "https://img1.hkrtcdn.com/18799/prd_1879880-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-8.8-lb-Double-Rich-Chocolate_o.jpg",
    "https://img1.hkrtcdn.com/18799/prd_1879880-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-8.8-lb-Double-Rich-Chocolate_o.jpg",
    "https://img1.hkrtcdn.com/18799/prd_1879880-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-8.8-lb-Double-Rich-Chocolate_o.jpg",
    "https://img1.hkrtcdn.com/18799/prd_1879880-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-8.8-lb-Double-Rich-Chocolate_o.jpg",
    "ON (Optimum Nutrition) Gold Standard 100% Whey Protein, 8.8 lb, Double Rich Chocolate",
    4.7,
    1900,
    12000,
    15000,
    11500
  
  );
  let x = new productObj(
    20,
    "https://img6.hkrtcdn.com/12586/prd_1258555-GNC-Amp-Gold-Series-100-Whey-Protein-Advanced-4.4-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/12586/prd_1258555-GNC-Amp-Gold-Series-100-Whey-Protein-Advanced-4.4-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/12586/prd_1258555-GNC-Amp-Gold-Series-100-Whey-Protein-Advanced-4.4-lb-Double-Rich-Chocolate_c_m.jpg",
    "https://img6.hkrtcdn.com/12586/prd_1258555-GNC-Amp-Gold-Series-100-Whey-Protein-Advanced-4.4-lb-Double-Rich-Chocolate_c_m.jpg",
    "GNC Amp Gold Series 100% Whey Protein Advanced, 4.4 lb, Double Rich Chocolate",
    4.3,
    1500,
    5500,
    7000,
    5200
  );
  let y = new productObj(
    10,
    "https://img6.hkrtcdn.com/11962/prd_1196195-MuscleTech-NitroTech-Performance-Series-3.97-lb-Cookies-Cream_c_m.jpg",
    "https://img6.hkrtcdn.com/11962/prd_1196195-MuscleTech-NitroTech-Performance-Series-3.97-lb-Cookies-Cream_c_m.jpg",
    "https://img6.hkrtcdn.com/11962/prd_1196195-MuscleTech-NitroTech-Performance-Series-3.97-lb-Cookies-Cream_c_m.jpg",
    "https://img6.hkrtcdn.com/11962/prd_1196195-MuscleTech-NitroTech-Performance-Series-3.97-lb-Cookies-Cream_c_m.jpg",
    "MuscleTech NitroTech Performance Series, 4 lb, Cookies & Cream",
    4.4,
    2900,
    5000,
    6890,
    4800
  );
  let z = new productObj(
    28,
    "https://img2.hkrtcdn.com/13462/prd_1346191-Myprotein-Impact-Whey-Protein-2.2-lb-Thandai_c_m.jpg",
    "https://img2.hkrtcdn.com/13462/prd_1346191-Myprotein-Impact-Whey-Protein-2.2-lb-Thandai_c_m.jpg",
    "https://img2.hkrtcdn.com/13462/prd_1346191-Myprotein-Impact-Whey-Protein-2.2-lb-Thandai_c_m.jpg",
    "https://img2.hkrtcdn.com/13462/prd_1346191-Myprotein-Impact-Whey-Protein-2.2-lb-Thandai_c_m.jpg",
    "Myprotein Impact Whey Protein, 2.2 lb, Thandai",
    4.4,
    1500,
    2500,
    3030,
    2400
  );
  let productArray= [];


  productArray.push(
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z
  );
  console.log(productArray);

  function display(){
    document.getElementById("product-list").innerHTML="";

    productArray.map((products) => {

        let prodiv= document.createElement("div");
        prodiv.id="prodiv";
        prodiv.addEventListener("click", () => {
          proDesc(products);
        })

        let prodivtop= document.createElement("div");
        prodivtop.id="prodivtop";



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
        console.log(products.title);

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

  display(productArray);