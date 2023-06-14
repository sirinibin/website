<!DOCTYPE html>
<html>
<head>
  <title>London School of Business & Research: Generate Discount Coupon for £175 or £75(EMI) </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>
</head>
<body>

<?php
$emailSent=false;
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

if(isset($_POST["coupon_form"])&&!empty($_POST["name"])&&!empty($_POST["email"])&&!empty($_POST["mob"])) {
 

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    //$mail->Host       = 'smtp.zoho.in';                    // Set the SMTP server to send through
    $mail->Host       = 'smtpout.secureserver.net';  
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@startuptech.uk';                     // SMTP username
    //$mail->Password   = 'startuptechconsultancy2021';                               // SMTP password
    $mail->Password   = '#startuptech2021#';
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    //$mail->Port       = 587; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('info@startuptech.uk', 'Startup Tech');
    
   // $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
   
    $mail->addAddress('sirinibin2006@gmail.com');               // Name is optional
    /*
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');
*/
    // Attachments
 //   $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
 //   $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'RE:'.$_POST["name"].' Accessed coupon';
    $mail->Body    = '<b>Name:</b>'.$_POST["name"].'<br/><b>Email:</b>'.$_POST["email"].'<br/><b>Mob:</b>'.$_POST["mob"].'<br/>';
    $mail->AltBody    = '<b>Name:</b>'.$_POST["name"].'<br/><b>Email:</b>'.$_POST["email"].'<br/><b>Mob:</b>'.$_POST["mob"].'<br/>'; //for non html clients

    $mail->send();
    $emailSent=true;
    //echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
 unset($_POST["name"]);
}
?>


<div class="coupon">
  <div class="container">
    <h3>London School of Business & Research: Generate Discount Coupon for £175(on FULL Payment) or £75(on EMI)</h3>
  </div>
  <img src="logo-ver4-light.webp" alt="Avatar" style="width:100%;">
  <div class="container" style="background-color:white">
    <h2><b>£175 | £75 Discount Coupon</b></h2> 
    <p>Please fill the below form to get a £175(on FULL Payment) or £75(on EMI) Discount coupon for your course. </p>
  </div>
  <div class="container">
  <?php if(!$emailSent) { ?>
    <form method="POST" >
      <table>
       <tr><td>Name:</td><td><input type="text" name="name" required></td></tr>
       <tr><td>E-mail:</td><td><input type="email" name="email" required></td></tr>
       <tr><td>Mob:</td><td><input type="text" name="mob" required></td></tr>
       <tr><td></td><td align="right"><input type="submit" name="coupon_form" value="GENERATE COUPON"></td></tr>
      </table>  
    </form>
    <?php } ?>
    <?php if($emailSent) { ?>
    <p>Your Coupon Code: <span class="promo">SIRIN175</span> on Full payment or  <span class="promo">SIRIN75</span> on EMI. Please redeem @ <a href="https://www.lsbr.uk/?utm_source=sirin&utm_medium=article&utm_campaign=l6otdipit" target="_blank" >https://www.lsbr.uk </a> </p>
    <?php } ?>
    <!--
    <p class="expire">Expires: Jan 03, 2021</p>
   -->
  </div>
</div>

</body>
<script>
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
</script>
</html> 

