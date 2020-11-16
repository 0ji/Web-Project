function loadProduct(index) {
    // loads products with index chosen to p
    var p = products[index];
    // grabs the title from the title class html
    var title = document.getElementsByClassName("product-title").item(2);
    var price = document.getElementsByClassName("priceinfo").item(index);
    var description = document.getElementsByClassName("product-description").item(index);
    var rating = document.getElementsByClassName("rate").item(index);
    var description = document.getElementsByClassName("product-description").item(index);
    title.innerText = p.title;
    price.innerText = p.price;
    description.innerText = p.description;
    rating.innerText = p.rate;
}

loadProduct(2)


function loadProduct(index) {
    // loads products with index chosen to p
    var p = products[index]
        // grabs the title from the title class html
    var title = document.getElementsByClassName("product-title").item(0)
    var price = document.getElementsByClassName("priceinfo").item(0)
    title.innerText = p.title
    price.innerText = p.price
    var description = document.getElementsByClassName("product-description").item(0)
    description.innerText = p.description




    var img = document.getElementsByClassName("product-image").item(0)
    img.setAttribute("src", p.imgsrc)

    updatePrice(p)

}

function updatePrice(p) {
    var quantity = document.getElementsByName("quantityinput")
    var price = document.getElementsByClassName("priceinfo").item(0)
    var totalPrice = p.quantity * p.price

    price.innerText = p.price


    console.log(totalPrice)

}