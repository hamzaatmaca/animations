const shapeTemplate = document.createElement('template');
shapeTemplate.innerHTML=`
<style>
#logo{
	font-size:50px;
	font-weight:bolder;
	letter-spacing:5px;


}
#text{
	margin-bottom:25vh;
}
#author{
	font-family: 'Lobster', cursive;
	font-size:12px;
	cursor:pointer;
	transition:.5s;
	font-weight:lighter;
}
#author:hover{
	color:skyblue
}

div span {
	letter-spacing:5px;
	font-family: 'Scope One', serif;
}
</style>
<div class="c" id="text">
	<div id="logo">MentalKod</div><br><br>
	<div><span>- Yaratıcı çözümler için..</span></div><br>
	<div><span>- Gerçeğin Kodlara Dönüştüğü Yer..</span></div><br><br>
	<div><span id="author">Designed By Hamza Atmaca</span></div>
</div>
`
class Shape extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(shapeTemplate.content.cloneNode(true))
	}
}
window.customElements.define('shape-info', Shape);
