<?php
//if "email" variable is filled out, send email
  if (isset($_POST['email']))  {
  
  //Email information
  $admin_email = "admin@sieyorroach.com";
  $email = $_POST['email'];
  $subject = "Email From " . $_POST['name'];
  $comment = $_POST['message'];
  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
 
?>