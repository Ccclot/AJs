
<?php 
	function create_connection(){
	$link =mysqli_connect("localhost","root","root")
	or die("Error!".mysqli_connect_error());	
	mysqli_query($link,"SET NAMES utf8");
	return $link;
}
	function execute_sql($link,$database,$sql){
	mysqli_select_db($link,"$database")
	or die ("Can not open it ".mysqli_error($link));
	$result=mysqli_query($link,$sql);
	return $result;
	}
?>