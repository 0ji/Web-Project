var current_index= -1;
// array of product objects
var products = [
  {
    id:1,
    title: "Introductory Intergalactic Mech" ,
    price: 599 ,
    description:"Mech for war" ,
    imgsrc:"img/element2.png" ,
    rate: "5"
  },

  {
    id: 3 ,
    title:"toilet" ,
    price:1200 ,
    description:"pooping in out of space :)",
    imgsrc:"img/element1.png",
    rate: "1"
  },
  {
    id: 4 ,
    title:"MK890" ,
    price:200 ,
    description:"Ray gun",
    imgsrc:"img/rocket.jpg",
    rate: "2"
  } ,
  {
    id: 5 ,
    title:"Von Braun thrusters" ,
    price:1200 ,
    description:"rocket thrusters",
    imgsrc:"img/spaceship_neptune.jpg",
    rate: "4"
  },
  {
    id: 6 ,
    title:"Exoskeleton" ,
    price:1800 ,
    description:"wearable exo adds 100lbs to your lift",
    imgsrc:"img/flex1.png",
    rate: "5"
  },
  {
    id: 7 ,
    title:"jetpack" ,
    price:1700 ,
    description:"air pressured jetpacks for zero g's",
    imgsrc:"img/flex2.png",
    rate: "4"
  },
  {
    id: 8 ,
    title:"Nuclear batteries" ,
    price:12200 ,
    description:"Nuclear powered battery",
    imgsrc:"img/element2.png",
    rate: "4"
  },
  {
    id: 9 ,
    title:"Helmet" ,
    price:1200 ,
    description:"Electronic helmet with A.I",
    imgsrc:"img/element2.png",
    rate: "4"
  },
  {
    id: 10 ,
    title:"holoprojector" ,
    price:1200 ,
    description:"projects your voice calls into holograms",
    imgsrc:"img/element2.png",
    rate: "4"
  },
  {
    id: 11 ,
    title:"solar panels" ,
    price:100 ,
    description:"solar panels can recharge nuclear batteries with solar winds ",
    imgsrc:"img/element2.png",
    rate: "4"
  }
]


loadProduct(0);


/**
* window.onload = function() {
var page = whichPageLoaded();
if
//

var proid =
}
funtion loadSearch(){
  var searchTerm = window.location.search.split("text=")[1];
}*/
function loadProduct(index){
  // loads products with index chosen to p
  var p =  products[index] ;
  // grabs the title from the title class html
  var title = document.getElementsByClassName("form-control").item(0);
  var price = document.getElementsByClassName("priceinfo" ).item(0);
  var description = document.getElementsByClassName("product-description").item(0);
  var rating = document.getElementsByClassName("rate").item(0);
  var description = document.getElementsByClassName("product-description").item(0);
  title.innerText = p.title;
  price.innerText = p.price;
  description.innerText = p.description;
  rating.innerText = p.rate;


  var img = document.getElementsByClassName("product-image").item(0);
  img.setAttribute("src" , p.imgsrc);

  current_index = index;
  updatePrice(p);
}





/**function calculate(){
var fullEquation = document.querySelector("[name=equation").value

// taking the value of equation out evaluating it and retirning it to name=equation
if (RegExp('^[0-9\\.\\+\\-\\*\\/]+$').test(fullEquation) && validation(fullEquation)) {
  // eval takes the string and evaluates it as a mathematical equation
  document.querySelector("[name=equation").value = eval(fullEquation);
} else {
  // if there are not valids symbols or doubles symbols equation = 'ERROR'
  document.querySelector("[name=equation").value = 'ERROR'
}
return false;
}
*/

function updatePrice(p){

  //parseFloat instead of eval
  var quantity = document.querySelector("[name=quantityin]").value;
  var price = eval((quantity) * p[current_index].price);
  var element = document.getElementsByClassName("priceC")
  element.innerText = "Total :" + price;


}
