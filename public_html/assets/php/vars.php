		<?php
			$strVar;
				//Sample Database Connection Script 
				 $strStartDate = $_REQUEST['strStartDate'];
				 $strEndDate = $_REQUEST['strEndDate'];
				 $offset = $_REQUEST['offset'];
				//echo $strStartDate;
				//echo $strEndDate;
				//Setup connection variables, such as database username
				//and password
				$hostname="localhost";
				$username="sieyor5_admin";
				$password="adminpass";
				$dbname="sieyor5_operations";
				$usertable="music";
				$day = "DATE";
				$image = "IMG";
				$title = "TITLE";
				$genre = "GENRE";
				$desc =  "DESC";
				$socl = "SOCL";
				$dl = "DL";
				$vid = "VID";
				
			
				
				$value;
				
				//Connect to the database
				$connection = mysql_connect($hostname, $username, $password);
				mysql_select_db($dbname, $connection);
				 
				//Setup our query
				//$query = "SELECT * FROM $usertable WHERE $day <= '$strStartDate' AND $day > '$strEndDate' ORDER BY $day DESC";
				$query = "SELECT * FROM $usertable ORDER BY $day DESC LIMIT 10 OFFSET " . $offset;
				 
				//Run the Query
				$result = mysql_query($query);
				 
				//If the query returned results, loop through
				// each result
				
				if($result)
				{
					$i = 0;
				  while($row = mysql_fetch_array($result))
				  {
					$name = "--DATE--" . $row["$day"] . "--LINE----GENRE--" . $row["$genre"] . "--LINE----TITLE--" . $row["$title"] . "--LINE----IMG--" . $row["$image"] . "--LINE----DESC--" . $row["$desc"] . "--LINE----SOCL--" . $row["$socl"] . "--LINE----DL--" . $row["$dl"] . "--LINE----VID--" . $row["$vid"] . "--ENDSONG--";
					
					$img = $img . " " . $name; 
					
			
					//echo $strVar;
					}	
					echo $img;
				}
		?>