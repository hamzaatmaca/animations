const navbarTemplate = document.createElement('template')
navbarTemplate.innerHTML=`
<style>

#burger{
	display: block;
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	cursor: pointer;
	
}
#burger:hover > .line:nth-child(1){
	width: 48px;
	height: 3px;
	
}
#burger:hover >.line:nth-child(2){
	width: 63px;
	height: 3px;
}
#burger:hover >.line:nth-child(3){
	width: 50px;
	height: 3px;
}
#burger:hover >.line:nth-child(4){
	width: 42px;
	height: 3px;
}
.line{
	width: 60px;
	height: 3px;
	margin:5px;
	background: black;
	cursor: pointer;
	border-radius: 3px;
	transition: .4s;
}
.line:nth-child(2)
{
	width: 30px;
	height: 3px;
}
.line:nth-child(3)
{
	width:40px;
	height: 3px;
}
#liste{
	margin-top: 10vh;
	display: none;

}
#liste .list{
	margin-top: 5vh;
	cursor: pointer;
	transition: .4s;	
}
#liste .list:hover{
	color: skyblue;

}
#bigline{
	position: absolute;
	width: 1px;
	height: 30vh;
	background: black;
	opacity:0;
	transition: 1s;
	margin-bottom: 15vh;

}
@media screen and (max-width: 999px){
	#bigline{
		height: 15vh;
	}
	.list{
		font-size: 15px;
	}
	#bigline{
		margin-right: 30%;
	}

}

</style>

<div id="burger">
	<div class="line"></div>
	<div class="line"></div>
	<div class="line"></div>
	<div class="line"></div>
</div>
<div id="bigline"></div>
<div class="srollliste" id="liste">
	<div id="anasayfa" class="list">Anasayfa</div>
	<div id="referanslar" class="list">Referanslar</div>
	<div id="iletisim" class="list">İletişim</div>
</div>

`;

class Navbar extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true))
	}
	getanasayfa(){
		this.shadowRoot.querySelector('#anasayfa').addEventListener('click',(e)=>{

		location.href = location.origin + location.pathname+ '#' + e.target.id;
		window.location.reload(false);

	});
	}
	getreferanslar(){
		this.shadowRoot.querySelector('#referanslar').addEventListener('click',(e)=>{

		location.href = location.origin + location.pathname+ '#' + e.target.id;
		window.location.reload(false);
	
	});
	}
	getiletisim(){
		this.shadowRoot.querySelector('#iletisim').addEventListener('click',(e)=>{

		location.href = location.origin + location.pathname+ '#' + e.target.id;
		window.location.reload(false);

	});
	}
	
	connectedCallback(){
		this.getanasayfa()
		this.getreferanslar()
		this.getiletisim()
		this.param=false;

		this.shadowRoot.querySelector('#burger').addEventListener('click',()=>{
				this.param=!this.param
				if(this.param){
					const burger = this.shadowRoot.querySelector('#burger');
					const liste =  this.shadowRoot.querySelector('#liste');
					const bigline =  this.shadowRoot.querySelector('#bigline');
					burger.style.transition='all .4s';
					burger.style.marginBottom= 25 + 'vh';
					liste.style.display="block";
					bigline.style.opacity='0.9';
					if(window.matchMedia("screen and (max-width:999px)").matches){
						burger.style.marginBottom= 10 + 'vh';
					}
				}
				else{

					const burger = this.shadowRoot.querySelector('#burger');
					const liste =  this.shadowRoot.querySelector('#liste');
					const bigline =  this.shadowRoot.querySelector('#bigline');
					liste.style.display="none";
					bigline.style.transition='all .2s';
					burger.style.marginBottom= 0 + 'vh';
					bigline.style.opacity='0';
				}
				


			
		})
		}
		disconnectedCallback(){
					this.shadowRoot.querySelector('#burger',removeEventListener('click'))
				}

}
window.customElements.define('mentalkod-navbar', Navbar)