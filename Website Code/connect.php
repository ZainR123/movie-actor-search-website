<?php
//Server which contains our MySQL database
$servername = "mysql.cs.nott.ac.uk";
//Username to login to "mysql.cs.nott.ac.uk"
$username = "psyzr2";
//Password to login to "mysql.cs.nott.ac.uk"
$password = "mysql";
//Database name which contains the data we want to use
$dbname = "psyzr2";
//"mysqli_connect" function used to connect to MySQL database server
$conn = mysqli_connect($servername, $username, $password, $dbname);
//If the MySQL connection to the server fails
if ($conn->connect_error) 
{
	//Prints out an error message related to issue and exits the PHP script
    die("<p><center>Connection failed: </center></p>" . $conn->connect_error);
}
?>
