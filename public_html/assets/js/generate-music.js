function musicParser(datePart, genre, img, title, desc, socl, dl, vid, displayWeek, displayEnding, endDivs, firstView){
	
	var monthNames = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
		"JULY", "AUG", "SEPT", "OCT", "NOV", "DEC" ];
		
	var monthNamesLong = [ "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December" ];
	var myDate = new Date();
	myDate.setFullYear(datePart[0],(datePart[1])-1, datePart[2]);
	
	var sunday = getMonday(myDate);
	var saturday = sunday + 6;
	//console.log("sunday: " + sunday);
	//console.log("saturday: " + saturday);
	
	
	var curr = new Date; // get current date
	curr.setFullYear(datePart[0],(datePart[1])-1, datePart[2]);
	var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	var last = first + 6; // last day is the first day + 6

	var firstday = new Date(curr.setDate(first));
	var lastday = new Date(curr.setDate(last));

	var strVar="";
	
	if (displayEnding == true) {
		strVar += "	<\/div>";
		strVar += "	<\/div>";
	}
	
	
	if (displayWeek == true) {
		//if (firstView == false){
		//	strVar += "	<div id=\"week\" class=\"container marketing hidden\">";
		//} else {
			strVar += "	<div id=\"week\" class=\"container marketing\">";
		//}
		strVar += "	<div id=\"result_box\">";
		strVar += "";
		strVar += "				<!-- " + firstday.getDate() + " " + monthNames[firstday.getMonth()] + " - " + lastday.getDate() + " " + monthNames[lastday.getMonth()] + " ---------------------------------------------------------------------------------------------------------->";
		strVar += "	<div class=\"date\">";
		strVar += "		<h1><i>" + firstday.getDate() + " " + monthNames[firstday.getMonth()] + " - " + lastday.getDate() + " " + monthNames[lastday.getMonth()] + "<\/i><\/h1>";
		strVar += "		<hr>";
		strVar += "	<\/div>";
		strVar += "	";
	}
	
	strVar += "		<div class=\"commonbox_2 post_third row-0\">";
	strVar += "		    ";
	strVar += "		    	<div class=\"img_box_common\">";
	strVar += "				            	<div class=\"post_tab_area\">";
	strVar += "   	        	  <div class=\"tab_area\">";
	strVar += "  	        		<ul>";
	strVar += "						<li class=\"second\">" + monthNamesLong[datePart[1]-1] + " " + datePart[2] + "<\/li>";
	strVar += "						<li class=\"fifth genre-" + genre.toLowerCase() + "\">" + genre + "<\/li>";
	strVar += "					<\/ul>";
	strVar += "          		<\/div>";
	strVar += "          	<\/div>  ";
	strVar += "	        	<div class=\"small_image_wrapper\">";
	strVar += "		            <img alt=\"" + title + "\" src=\"" + img + "\">";
	strVar += "		        <\/div>";
	strVar += "		      <\/div>";
	strVar += "    	        ";
	strVar += "		      <div class=\"commonbox_content\">";
	strVar += "          	<h3>" + title + "<\/h3>";
	strVar += "            <p class=\"preview_body\">" + desc + "<\/p>";
	strVar += "			" + socl ;
	strVar += "            <div class=\"player-links\">";
	strVar += "  ";
	strVar += "  <div class=\"clear\"><\/div>";
	strVar += "			<\/div>	        ";
	strVar += "			<\/div>";
	strVar += "    	        ";
	strVar += "	        <div class=\"link-row\">";
	strVar += "  <ul>";
	
	if (dl.length != 0) {
		strVar += "  <li>";
		strVar += "    <a href=\"http:\/\/offliberty.com\/#" + dl + "\">Download<\/a>";
		strVar += "  <\/li>";
	}
	
	if (vid.length != 0) {
		strVar += "  	<li>";
		strVar += "	<a href=\"" + vid + "\">Video<\/a>";
		strVar += "  <\/li>";
	}
	strVar += "    <\/ul>";
	strVar += "		<\/div>	        ";
	strVar += "        <\/div>";

	if (endDivs == true) {
	//console.log("END DIVS: true");
		strVar += "	<\/div>";
		strVar += "	<\/div>";
	}
	
	
	return strVar;
}

 
 function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:0); // adjust when day is sunday
  return new Date(d.setDate(diff));
}


     Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(),0,1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay())/7);
    } 

    var weekNumber = (new Date()).getWeek();

    // Array of day names
    var dayNames = new Array(
    "It's Sunday, the weekend is nearly over",
    "Yay! Another Monday",
     "Hello Tuesday, at least you're not Monday",
     "It's Wednesday. Halfway through the week already",
     "It's Thursday.",
     "It's Friday - Hurray for the weekend",
    "Saturday Night Fever");
    var now = new Date();
    //document.write(dayNames[now.getDay()] + "(" + weekNumber + ").");
