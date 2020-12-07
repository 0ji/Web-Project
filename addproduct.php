<?php
include 'prodconnection.php';
$prodconn = OpenCon();
echo "Connected Successfully";
CloseCon($prodconn);
?>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Koji Dino, Usaamah Gill, Akshay Gokani">

    <title>BlackStarAlliance - Upload new Products</title>

    <!-- Font Awesome CDN -->
    <script src="https://kit.fontawesome.com/ea25cca267.js" crossorigin="anonymous"></script>

    <!-- Google fonts -->
    <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>

    <!-- Custom Stylesheet-->
    <link rel="stylesheet" href="css/style_upload.css">
</head>

<body>
    <!-- Navigation / Header -->
    <header>
        <!-- This creates the dynamic header image, text and logo area at the top of the page  -->
        <div class="TopBanner">
            <div class="BannerText">
                <h1>Welcome to the world of BlackStar Alliance</h1>
                <p>'Bringing the universe to you, and you to the universe'</p>
            </div>
        </div>
    </header>

    <main>

        <!-- Sticky Navbar -->
        <nav>
            <!-- Left Side -->
            <div>
                <button class="logo" onclick="location.href='./index.html'">BlackStar Alliance</button>
                <button class="item" href="#">About</button>
                <button class="item" href="#">Blog</button>
            </div>
            <div>
            </div>
            <!-- Right Side -->
            <div class="right">
                <div>
                    <li class="product-search">
                        <form action="/search.html" method="get" id="form1"><input type="text" placeholder="Search.." name="query" id="search_field">
                            <button type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </li>
                </div>
                <button class="item coolbuttons" href="#">Log In</button>
                <button class="item coolbuttons" href="#">Sign Up</button>
                <button class="item coolbuttons" href="#"><i class="fas fa-shopping-cart"></i></button>
            </div>
        </nav>

        <!-- Text (or jumbotron) -->
        <h1 class="desc">Upload a new Product!</h1>
        <div class="text">
            <p class="desc">
                This page is for our honoured sellers and manufacturers. Have a new product that you would like to sell through BlackStar Alliance's intergalactic network? Upload all the details here for review, and we'll get in touch as soon as we've reviewed all the details to talk business.
            </p>
        </div>
        <div class="product-placement">
            <!--1st flexbox containing pictures that customer can scroll through and click to enlarge on the main block.-->

            <!--Main product image view pane-->
            <div class="product-image-container">
                <!--coontainer with the actual image file to allow resizing independently of flexbox-->

                <!--Container for product name/title-->

                <div class="side-flex">

                    <div class="imgcont">
                        <img class="product-image" src="/img/element1.png" alt="Formula 1 Mech">
                    </div>
                    <!--Flexbox for description UNDER flexbox with main image, organized in a column-->
                    <div class="infocenter">
                        <div class="titleflex">
                            <h2 class="product-title" id="title1">Title placeholder</h2>
                        </div>
                        <div class="desc-flex">
                            <div class="descborder">
                                <p class="product-description">placeholder for description</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <!--item info flexbox containing price, quantity, add to cart button and rating toggle-->
            <div class="iteminfo">
                <!--Price-->
                <div class="priceinfo">
                    <h2>$</h2>
                    <h2 id="priceDisplay">placeholder</h2>
                </div>
                <!--Number input to select quantity-->

                <!--add to cart button-->
                <div class="add-to-cart">
                    <button type="button" name="button" onclick=spook()>Add to Cart</button>
                </div>

            </div>
        </div>
        <!-- Featured cards -->
        <div class="flex-card">
            <div class="flextext">
                <h2>Brand new <br> Rocket Powered Battle Cars!</h2>
                <h4>Now Available across the Galaxy</h4>
            </div>
            <div class="fleximg"><img src="img/flex1.png"></div>
        </div>

        <div class="flex-card">
            <div class="fleximg"><img src="img/flex2.png"></div>
            <div class="flextext">
                <h2>Experience this stunning VR game</h2>
                <h4>Wits, deception, murder?</p>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">

        <!-- Left -->
        <div class="footer_left">
            <img src="img/logo2.png">
            <p class="footer_links">
                <a href="landingpage">Home</a>
                <a href="landingpage">About</a>
                <a href="landingpage">Blog</a>
                <a href="landingpage">Log In</a>
            </p>
            <p class="footer-company-name">
                © 2122 BlackStarAlliance
            </p>
        </div>

        <!-- Center -->
        <div class="footer_center">
            <div class="address">
                <p><span>1005 Market St, San Francisco, California, United States, North America, Earth, Solar System,
                        Spiral Arm, Milky Way, Laniakea Supercluster</p>
            </div>
            <div class="number">
                <p>403-222-0911</p>
            </div>
            <div class="support">
                <a href="info@BlackStarAlliance">
                    <p>info@BlackStarAlliance</p>
                </a>
            </div>
        </div>

        <!-- Right -->
        <div class="footer_right">
            <div class="footerAbout">
                <h3>About BlackStar Alliance</h3>
                <p>As the premiere Faster Than Light Travel&trade; company in the universe, we take great pride in bringing you into space, and beyond.</p>
            </div>
            <div class="footersocial">
                <a href="www.facebook.com" class="facebook">Facebook</a>
                <a href="www.instagram.com" class="instagram">instagram</a>
                <a href="www.Youtube.com" class="Youtube">Youtube</a>
                <a href="www.linkedin.com" class="linkedin">linkedin</a>
                <a href="www.twitter.com" class="twitter">twitter</a>
            </div>
        </div>
    </footer>
</body>

</html>
