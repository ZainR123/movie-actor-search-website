<!--Sets document type to HTML since file is originally a php file-->
<!DOCTYPE html>
<!--Tells the browser this is a HTML document-->
<html>
<!--The head is where we include our metadata such as links, scripts and titles-->
<head>

<!--Links css file to our php file-->
<link rel="stylesheet" type="text/css" href="format.css">
<!--Links our google font to our php file-->
<link href="https://fonts.googleapis.com/css?family=Alata" rel="stylesheet">
<!--Links our JavaScript file to our php file-->
<script src="validation.js"></script>

<!--Sets the Tab title for the webpage-->
<title>Delete Actor</title>

<!--End of head tag-->
</head>
<!--Defines the document's body and contains all the elements of a HTML document-->
<body>

<!--Defines a division in the file where we can include a container to style with for CSS and help us with certain tasks in JavaScript-->
<!--Here we set parameters for a navigation bar-->
<div class="navigation">
	<!--Here we create a class for the current page we will be viewing-->
	<!--href specifies the link's destination-->
	<a href="index.php">Search Actor</a>
	<a href="searchMovie.php">Search Movie</a>
	<a href="addActor.php">Add Actor</a>
	<a href="addMovie.php">Add Movie</a>
	<a class="current" href="deleteActor.php">Delete Actor</a>
	<a href="deleteMovie.php">Delete Movie</a>
<!--End of div tag-->
</div>

<!--Header of the page in the largest header font size-->
<h1>Delete Actor</h1>

<!--“form” Creates a HTML form for user input-->
<!--'method = “POST”'Appends form-data inside the body of the HTTP request-->
<!--“onsubmit” links to a function when form is submitted-->
<form action = "" method = "POST" onsubmit = "return validationActor(this)">
<!--Creates an input which only accepts text and assigns it a name-->
<!--Before an input is typed the placeholder value will be prompted as a guide-->
<!--'Required' makes sure the user has to input a value-->
<input type = "text" name = "ActorName" placeholder = "Actor Name" required><br>
<!--Creates an input for the submit button-->
<input type = "submit" name = "Delete" value = "Delete">
<!--End of form tag-->
</form>

<!--Starts the PHP script within file-->
<?php
	//links php file with connection details to MySQL database
	include 'connect.php';

	//If the variable 'Delete' was posted then
	if (isset($_POST['Delete'])) 
	{
	//Saves value inputted as a variable and trims it to remove all white space
	$actorQuery = trim($_POST['ActorName']);
	//Save sql statement we want to run as a variable
	$sql= "DELETE FROM Actor WHERE actName ='$actorQuery'";
	//Performs query against our database saving value as a variable
	$result = mysqli_query($conn, $sql);
	//assigns a variable to the number of affected rows when the query is run
	$num = mysqli_affected_rows($conn);
	//if number of rows affected is more than 0
	if($num > 0)
	{
		//prints out successful message with css styling
		echo '<div class="confirmation">';
		echo "<br>Actor Deleted<br><br>";
	}
	else
	{
		//else prints out error message with css styling
		echo '<div class="confirmation">';
		echo "<br><c>Error:</c>Actor Not Found<br><br>";
		echo '</div>';
	}
	}
//Ends MySQL connection
mysqli_close($conn);
//Ends PHP script
?>
<!--End of body tag-->
</body>
<!--End of html tag-->
</html>