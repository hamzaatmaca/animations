import * as contact from '/mentalkod/components/pages/contact/contact.js';
var yol = window.location.href;
var yolArray = yol.split("#");
var last = yolArray[1];



if(last == "iletisim"){
	document.getElementById('maincontainer').innerHTML=contact.deger
}
else if(last == "referanslar"){
	window.location.href='https://mentalkod.com/minikutuphane.html'
}