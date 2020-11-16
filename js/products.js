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
    id:2,
    title:"Ship" ,
    price:900 ,
    description:"shp for space",
    imgsrc:"img/element2.png" ,
    rate: "4"
    },
    {
    id: 3 ,
    title:"toilet" ,
    price:1200 ,
    description:"pooping in out of space :)",
    imgsrc:"img/element2.png",
    rate: "1"
    },
    {
    id: 4 ,
    title:"MK890" ,
    price:200 ,
    description:"Ray gun",
    imgsrc:"img/element2.png",
    rate: "2"
    } ,
    {
    id: 5 ,
    title:"Von Braun thrusters" ,
    price:1200 ,
    description:"rocket thrusters",
    imgsrc:"img/element2.png",
    rate: "4"
    },
    {
    id: 6 ,
    title:"Exoskeleton" ,
    price:1800 ,
    description:"wearable exo adds 100lbs to your lift",
    imgsrc:"img/element2.png",
    rate: "5"
    },
    {
    id: 7 ,
    title:"jetpack" ,
    price:1700 ,
    description:"air pressured jetpacks for zero g's",
    imgsrc:"img/element2.png",
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
    title:"solar panels " ,
    price:100 ,
    description:"solar panels can recharge nuclear batteries with solar winds ",
    imgsrc:"img/element2.png",
    rate: "4"
    }
]

function loadProduct(index){
    // loads products with index chosen to p
   var p =  products[index] ;
   // grabs the title from the title class html
   var title = document.getElementsByClassName("product-title").item(2);
   var price = document.getElementsByClassName("priceinfo" ).item(index);
   var description = document.getElementsByClassName("product-description").item(index);
   var rating = document.getElementsByClassName("rate").item(index);
   var description = document.getElementsByClassName("product-description").item(index);
   title.innerText = p.title;
   price.innerText = p.price;
   description.innerText = p.description;
   rating.innerText = p.rate;
}

loadProduct(2)


function loadProduct(index){
    // loads products with index chosen to p
   var p =  products[index]
   // grabs the title from the title class html
   var title = document.getElementsByClassName("product-title").item(0)
   var price = document.getElementsByClassName("priceinfo" ).item(0)
   title.innerText = p.title
   price.innerText = p.price
   var description = document.getElementsByClassName("product-description").item(0)
   description.innerText = p.description




   var img = document.getElementsByClassName("product-image").item(0)
   img.setAttribute("src" , p.imgsrc)

   updatePrice(p)

}

function updatePrice(p){
    var quantity = document.getElementsByName("quantityinput")
    var price = document.getElementsByClassName("priceinfo" ).item(0)
    var totalPrice = p.quantity * p.price

    price.innerText = p.price


    console.log(totalPrice)



}
