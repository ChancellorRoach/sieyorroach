<?php
if ($_GET['randomId'] != "lNVIshcIf2HCdaPyzZ078ywAbOQ0dduhEBLwhmkCEj_HZrTqfAUjwvUodKv_sTVr") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
