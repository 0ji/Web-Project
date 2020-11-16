var current_index= -1;
// array of product objects

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
