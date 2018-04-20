<?php
include 'new_user.php';
?>
<!DOCTYPE html>
<html>
<body>
<h2>PHP Form Validation Example</h2>
<p><span>* required field.</span></p>
<form method="post" action="<?php register(); echo $reg;?>" onsubmit= "<?php echo $hh;?>">  
  First Name: <input type="text" name="fname" value="<?php echo $fname;?>">
  <span id = "demo">* </span>
  <br><br>
  Second Name: <input type="text" name="sname" value="<?php echo $sname;?>">
  <span>* <?php echo $snameErr;?></span>
  <br><br>
  last Name: <input type="text" name="lname" value="<?php echo $lname;?>">
  <span>* <?php echo $lnameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span>* <?php echo $emailErr;?></span>
  <br><br>
  E-mail: <input type="password" name="password" value="<?php echo $password;?>">
  <span>* <?php echo $passwordErr;?></span>
  <br><br>
  Birthdate: <input type="text" name="year" value="<?php echo $y;?>">
  <input type="number" name="month" value="<?php echo $m;?>">
  <input type="number" name="day" value="<?php echo $d;?>">
  <span><?php echo $birthdateErr;?></span>
  <br><br>
  Country: <input type = "text" name="country" value="<?php echo $country;?>">
  <span><?php echo $countryErr;?></span>
  <br><br>
  study field: <input type="text" name="study" value="<?php echo $study;?>">
  <span>* <?php echo $studyErr;?></span>
  <br><br>
  adress: <input type="text" name="adress" value="<?php echo $adress;?>">
  <br><br>
  <input type="submit" name="submit" value="Submit" onclick= " document.getElementById('demo').innerHTML ='<?php echo $fnameErr;?>'">  
</form>
<?php
echo $regStatus;
echo $fname;
?>
</body>
</html>