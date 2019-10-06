<html>
    <body>
<?php
$advice=$_POST["advice"];
$name=$_POST["username"];
if($advice==""||$name==""){
    echo"<script>alter('Please fulfil the form!')</script>";
}
else{
      $mysqli=mysqli_connect("localhost" ,"root","root","advice");
   
      $sql="insert into suggestion(suggestionid,advice,name) values(NULL,'$advice','$name')";
	  mysqli_query($mysqli,$sql);
      echo"<script>alert('Thank you for your advice!');location.href='homepage.html'</script>";
	  }

?>
    </body>
</html>