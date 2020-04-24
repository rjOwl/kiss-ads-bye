// ==UserScript== 
// @name kissanime_No_ads 
// @version 1 
// @author Le mofasa 
// @grant none 
// ==/UserScript== 
var url="https://kissanime.ru/"; 
if(window.location.href.includes(url)){ 
	function removeElement(elementId) { 
		// Removes an element from the document 
		var element = document.getElementById(elementId); 
		element.parentNode.removeChild(element); 
	} 
        var ids=["divAds", "adsIfrme1", "adsIfrme3", "divAds2", "divAds", "center", "adsIfrme6", "adsIfrme7", "divFloatLeft", "a2mdn_1034_r", "a2mdn_1034_l"] 
	    
	idsLen = ids.length; 
	for (i = 0; i < idsLen; i++) { 
		try{ 
			removeElement(ids[i]) 
		} 
		catch{ ; 
		} 
	} 
}
