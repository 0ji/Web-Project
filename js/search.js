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

//loads search result, if any.
window.addEventListener('load', (event) => {
    var query = sessionStorage.getItem("query");
    if ((query != "") && (query != null)) {
        alert("You searched for " + query);
    } else {
        // fill with default products.
    }
});

// Search function to store query in session storage.
function searchQuery() {
    var query = document.getElementById("search_field").value;
    sessionStorage.setItem("query", query);
    window.location.href = "/search.html";
}

/*function searchQuery() {
    var query = document.getElementById("search_field").value.toUppercase();
    alert("test" + query);

    //input, searchvar, i, products, container, item;
    var list = [{
            "title": "Example 1",
            "img": "img/product-placeholder-2.png",
            "price": "123.45",
            "stars": "5",
            "reviews": "4",
            "desc": "lorem ipus blah blah blah"
        },
        {
            "title": "Example 2",
            "img": "img/product-placeholder.png",
            "price": "223.45",
            "stars": "4",
            "reviews": "3",
            "desc": "sdfsdf ipus blah blah blah"
        }
    ];


    input = document.getElementById("search_field").value.toUppercase();
    container = document.getElementById("products");
    products = cars.filter(list => list.title == input);
    for (i = 0; i < products.length(); i++) {
        item = document.createElement("li");
        item.setAttribute('class', 'product-card');
    }
}*/