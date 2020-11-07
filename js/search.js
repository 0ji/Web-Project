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

// javascript list of products
// test
var list = [{
        "title": "Example 1",
        "img": "img/product-placeholder.png",
        "price": "$123.45",
        "rating": "5 stars",
        "reviews": "4 reviews",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        "category": "donuts-category"
    },
    {
        "title": "Example 2",
        "img": "img/product-placeholder.png",
        "price": "223.45",
        "rating": "4",
        "reviews": "3",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        "category": "example 2"
    }
];

// Search function to store query in session storage.
function searchQuery() {
    var query = document.getElementById("search_field").value;
    sessionStorage.setItem("query", query);
    window.location.href = "/search.html";
}

//loads search result, if any.
window.addEventListener('load', (event) => {
    var query = sessionStorage.getItem("query");
    var container = document.getElementById("products"); // product container
    if ((query != "") && (query != null)) {
        container.innerHTML = ''; // clear products
        alert("You searched for " + query);
        // loops through js product array
        for (i = 0; i < list.length; i++) {
            var product = list[i];
            var title = product.title.toUpperCase();
            if (title.includes(query.toUpperCase())) {
                alert("MATCH: \n" + title + "/" + query.toUpperCase());

                var productCard = document.createElement("LI");
                productCard.className = "product-card";
                productCard.setAttribute("category", product.category);


                var img = document.createElement("IMG");
                img.src = product.img;

                var name = document.createElement("H1");
                name.innerHTML = product.title;

                var price = document.createElement("P");
                price.innerHTML = product.price;

                var rating = document.createElement("P");
                rating.innerHTML = product.rating;

                var reviews = document.createElement("P");
                reviews.innerHTML = product.reviews;

                var desc = document.createElement("P");
                desc.innerHTML = product.desc;

                var button = document.createElement("BUTTON");
                button.innerHTML = "Add to cart";

                productCard.appendChild(img);
                productCard.appendChild(name);
                productCard.appendChild(price);
                productCard.appendChild(rating);
                productCard.appendChild(reviews);
                productCard.appendChild(desc);
                productCard.appendChild(button);

                container.appendChild(productCard);
            }
        }
        alert("for done");
    } else {
        alert('no query found');
        // keep default products on page (hard-coded)
    }
});

/*function searchQuery() {
    var query = document.getElementById("search_field").value.toUppercase();
    alert("test" + query);

    //input, searchvar, i, products, container, item;

    input = document.getElementById("search_field").value.toUppercase();
    container = document.getElementById("products");
    products = cars.filter(list => list.title == input);
    for (i = 0; i < products.length(); i++) {
        item = document.createElement("li");
        item.setAttribute('class', 'product-card');
    }
}*/