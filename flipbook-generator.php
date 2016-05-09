<?php


for($i = 2 ; $i < 150 ; $i++){
	echo htmlspecialchars('<div><img src="product_guide/Product Guide_Page_'.sprintf('%03d', $i).'.jpg" /></div>');
}

?>
