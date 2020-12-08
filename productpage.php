<?php
include 'prodconnection.php';
$prodconn = OpenCon();
echo "Connected Successfully";
?>

<html lang="en">
<!--head tag for containing meta info-->

<head>
  <meta charset="utf-8">
  <!--Setting initial viewport to 1 to scale contents with device size-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Koji Dino, Usaamah Gill, Akshay Gokani">
  <title>Space Product Page</title>
  <link rel="stylesheet" href="css/style_product.css">

  <!-- Font Awesome CDN -->
  <script src="https://kit.fontawesome.com/ea25cca267.js" crossorigin="anonymous"></script>
  <!-- Google fonts -->
  <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>
</head>

<!-- body tag contains our visual code, header for top elements-->

<body>
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
    <!--Navigation bar that contains links, sign up and -->
    <!-- Sticky Navbar -->
    <nav>
      <!-- Left Side -->
      <div>
        <button class="logo" onclick="location.href='./index.php'">BlackStar Alliance</button>
        <button class="item" href="#">About</button>
        <button class="item" href="#">Blog</button>
      </div>
      <!-- Right Side -->
      <div class="right">
        <div>
          <li class="product-search">
            <form action="/search.php" method="get" id="form1"><input type="text" placeholder="Search.." name="query" id="search_field">
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </li>
        </div>
        <button class="item coolbuttons" href="#" onclick="location.href='./addproduct.php'">Log In</button>
        <button class="item coolbuttons" href="#">Sign Up</button>
        <button class="item coolbuttons" href="#"><i class="fas fa-shopping-cart"></i></button>
      </div>
    </nav>
    <!--container for product screens flexboxes-->
    <?php
    $stmt = $prodconn->prepare('SELECT * FROM `products` WHERE `ProductID` = ?');
    $searchid = $_GET["id"];
    $stmt->bind_param("s", $searchid);
    $stmt->execute();
    $stmt->bind_result($id, $title, $price, $desc, $imgsrc, $rating);
    $stmt->fetch();



    echo <<<END
          <div class="product-placement">
          <!--1st flexbox containing pictures that customer can scroll through and click to enlarge on the main block.-->
          <!--Main product image view pane-->
          <div class="product-image-container">
          <!--coontainer with the actual image file to allow resizing independently of flexbox-->
          <!--Container for product name/title-->
          <div class="side-flex">
          <div class="imgcont">
          <img class="product-image" src=$imgsrc alt="Formula 1 Mech">
          </div>
          <!--Flexbox for description UNDER flexbox with main image, organized in a column-->
          <div class="infocenter">
          <div class="titleflex">
          <h2 class="product-title" id="title1">$title</h2>
          </div>
          <div class="desc-flex">
          <div class="descborder">
          <p class="product-description"> $desc</p>
          </div>
          </div>
          </div>
          </div>
          </div>
          <!--item info flexbox containing price, quantity, add to cart button and rating toggle-->
          <div class="iteminfo">
          <!--Price-->
          <div class="priceinfo">
          <h2>$ $price</h2>
          </div>
          <!--Number input to select quantity-->
          <div class="quanityselector">
          <label for="quantityinput">Quantity:</label><br>
          <!-- ON change -->
          <input type="number" class="quaninput" id="quantityInput" name="quantityin" value="1" min="1" max="99" onchange="updatePrice()">
          </div>
            <!--add to cart button-->
            <div class="add-to-cart">
            <button type="button" name="button" onclick=spook()>Add to Cart</button>
              </div>
              <!-- HTML code to create elements for star ratings. Modified and adapted from: https://github.com/mukulkant/Star-rating-using-pure-css-->
                <div class="rating">
                <p class="starrating">$rating</p>
                </div>
                </div>
                </div>
      END;
      $stmt->close();
      CloseCon($prodconn);
      ?>
      <!--container for flexbox spanning across screen, split into image and text inspired by Samsung shop, repeating elements as placeholders-->
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
        <script src="js/products.js"></script>
        <script src="js/productpage.js"></script>
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
              <p>As the premiere Faster Than Light Travel&trade; company in the universe, we take great pride in bringing
                you into space, and beyond.</p>
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
