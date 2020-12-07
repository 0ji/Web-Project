<?php

function OpenCon()
{
  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $db = "products";

  $prodconn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $prodconn -> error);

  return $prodconn;
}

function CloseCon($prodconn)
{
  $prodconn -> close();
}

?>
