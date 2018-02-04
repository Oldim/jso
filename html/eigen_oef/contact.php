<?php
$naam=$_POST['naam'];
$email=$_POST['email'];
$bedrijfNaam=$_POST['bedrijfNaam'];
$tel=$_POST['tel'];
$berichtFrm=$_POST['berichtFrm'];

mail("olifirenko88@gmail.com","Contact from the site",$message,"From: $email\r\n");

echo"Uw bericht werd verstuurd.";

?>