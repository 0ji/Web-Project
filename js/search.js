//JS dropdown ( taken from http://w3schools-fa.ir/howto/howto_js_dropdown_sidenav.html )>
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// // javascript list of products
// var list = [{
//         "title": "Example 1",
//         "img": "img/product-placeholder.png",
//         "price": "$123.45",
//         "rating": "5 stars",
//         "reviews": "4 reviews",
//         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//         "category": "donuts-category"
//     },
//     {
//         "title": "Example 2",
//         "img": "img/product-placeholder.png",
//         "price": "223.45",
//         "rating": "4",
//         "reviews": "3",
//         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//         "category": "example 2"
//     }
// ];

// loads search result, if any.
// learned from https://www.sitepoint.com/get-url-parameters-with-javascript/
// TODO: add options to sort/filter at end.
window.addEventListener('load', (event) => {
    // get parameters from URL
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    query = urlParams.get('query');
    lowPrice = urlParams.get('lowPrice');
    highPrice = urlParams.get('lowPrice');

    var container = document.getElementById("products"); // product container
    var resultcounter = 0; // counter to keep track of number of matching products
    if ((query != "") && (query != null)) {
        container.innerHTML = ''; // clear products
        // loops through js product array   -- can also use list.forEach(function(product){}), product=i
        for (i = 0; i < products.length; i++) {
            var product = products[i];
            var title = product.title.toUpperCase();
            if (title.includes(query.toUpperCase())) {
                createProductCard(container, product);
                resultcounter++;
            }
        }
    } else {
        container.innerHTML = '';
        for (i = 0; i < products.length; i++) {
            var product = products[i];
            var title = product.title.toUpperCase();
            createProductCard(container, product);
        }
        // keep default products on page (hard-coded)
    }



    // update query field to match, and update search results header string.
    document.getElementById("search_field").value = query;
    document.getElementById("hiddenSearch").value = query;
    document.getElementById("search_header").innerHTML = '"' + query + '" has yielded ' + resultcounter + ' results.';
    // update filter/sorts to match

});

// add onclick which redirects to productpage with GET product ID (e.g. productpage?id=5)

// creates product card and inserts it into page
function createProductCard(container, product) {
    // creates DOM product card
    var productCard = document.createElement("LI");
    productCard.className = "product-card";
    productCard.setAttribute("id", product.id);
    // productCard.setAttribute("category", product.category); // planned feature, to implement sorting by category

    // creates HTML DOM elements for product card
    var img = document.createElement("IMG");
    var name = document.createElement("H1");
    var price = document.createElement("P");
    var rating = document.createElement("P");
    var desc = document.createElement("P");
    var button = document.createElement("BUTTON");

    // updates DOM elements with product elements
    img.src = product.imgsrc;
    name.innerHTML = product.title;
    price.innerHTML = '$' + product.price;
    rating.innerHTML = product.rate + ' stars';
    desc.innerHTML = 'desc: ' + product.description;
    button.innerHTML = "Add to cart";

    // appends DOM elements to product card
    productCard.appendChild(img);
    productCard.appendChild(name);
    productCard.appendChild(price);
    productCard.appendChild(rating);
    productCard.appendChild(desc);
    productCard.appendChild(button);

    // appends product card to product container
    container.appendChild(productCard);
}