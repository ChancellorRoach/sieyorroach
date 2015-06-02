		<?php
				//Sample Database Connection Script 
				 
				//Setup connection variables, such as database username
				//and password
				$hostname="localhost";
				$username="sieyor5_admin";
				$password="adminpass";
				$dbname="sieyor5_operations";
				$usertable="quotes";
				$quote = "quote";
				$author = "author";
				
				$value;
				
				//Connect to the database
				$connection = mysql_connect($hostname, $username, $password);
				mysql_select_db($dbname, $connection);
				 
				//Setup our query
				$query = "SELECT * FROM $usertable ORDER BY RAND() LIMIT 1";
				 
				//Run the Query
				$result = mysql_query($query);
				 
				//If the query returned results, loop through
				// each result
				
				if($result)
				{
				  while($row = mysql_fetch_array($result))
				  {
					$name = $row["$quote"] . "-" . $row["$author"];
				  }
				}
				echo $name;
		?>