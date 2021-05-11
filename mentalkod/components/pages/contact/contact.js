export const deger = `
<con-link></con-link>
`;


const contactTemplate = document.createElement('template');
contactTemplate.innerHTML=`
<style>

#contactgeneral{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 90vw;
	min-height: 100vh;
	
}
form{
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;

}

#contactgeneral form input,textarea,button{
	width:30vw;
	margin:3vh;
	text-align:center;
	font-family:arial;
	color:grey
}
#contactgeneral form input{
	height:30px;
	border-radius:5px;
	outline:none;
	border:none;
	border-bottom: 1px solid;
	transition:.6s;
}
::placeholder {
	letter-spacing:5px;
	
}
#contactgeneral form input:focus{
	box-shadow:1px 1px 10px black
}
#contactgeneral form textarea{
	border:none;
	outline:none;
	border-radius: 4px;
	height:25vh;
	width:25vw;
	transition:.6s;
	box-shadow:1px 1px 1px black
}
#contactgeneral form textarea:focus{
	border:none;
	outline:none;
	box-shadow:1px 1px 10px black
}
#contactgeneral form button{
	border:none;
	outline:none;
	background:black;
	color:white;
	letter-spacing:16px;
	height:30px;
	font-size:15px;
	cursor:pointer;
	border-radius:5px;
	transition:.6s;
}
#contactgeneral form button:hover{
	text-shadow:1px 1px 11px white;
	
}
#contactinfo{
	min-height:100vh;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
}
h2
{
	text-align:center;
	letter-spacing:4px;
}
ul li{
	list-style-type:none;
	margin:4vh;
}
@media screen and (max-width: 999px){
	#contactgeneral form input,button{
	width:100%;
	margin:3vh;
	text-align:center
	}
	#contactgeneral textarea{
		width:44vw
	}
	#contactgeneral{
		flex-wrap:wrap;
		margin-left:8vw;
		margin-top:10vh;
	}
}

#balon{
	width:20vh;
	height:20vh;
	position:absolute;
	border-radius:50%;
	margin-right:250px;
	margin-bottom:250px;
	z-index:-4;
	transform:translateZ(1000px);
	transition:1s;
	opacity:0;
	animation-name: rob;
	animation-duration:  40s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#balonnn{
	width:30vh;
	height:30vh;
	position:absolute;
	background:black;
	border-radius:50%;
	margin-left:250px;
	margin-bottom:250px;
	z-index:-6;
	transition:3s;
	cursor:pointer;
	opacity:0;
	animation-name: roto;
	animation-duration:  60s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#balonn{
	width:25vh;
	height:25vh;
	position:absolute;
	background:black;
	border-radius:50%;
	margin-left:250px;
	margin-bottom:250px;
	z-index:-1;
	transition:3s;
	cursor:pointer;
	opacity:0;
	animation-name: rotk;
	animation-duration:  50s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#bal{
	width:15vh;
	height:15vh;
	position:absolute;
	background:black;
	border-radius:50%;
	margin-left:250px;
	margin-bottom:250px;
	z-index:-1;
	transition:3s;
	cursor:pointer;
	opacity:0;
	animation-name: rotek;
	animation-duration:  70s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#plane{
	width:10vh;
	height:10vh;
	position:absolute;
	background:#524947;
	border-radius:50%;
	margin-left:250px;
	margin-bottom:250px;
	z-index:-1;
	transition:3s;
	cursor:pointer;
	opacity:0;
	animation-name: plane;
	animation-duration:  20s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#pulsar{
	width:43vh;
	height:43vh;
	position:absolute;
	background:white;
	border-radius:50%;
	margin-left:250px;
	margin-bottom:250px;
	z-index:-1;
	transition:3s;
	cursor:pointer;
	opacity:0;
	animation-name: pulsar;
	animation-duration:  200s;
    animation-timing-function: linear;
	animation-iteration-count: infinite;

}
#contactgeneral:hover > #balon{
	background:white;
	box-shadow: 0 0 10px grey, inset 0 0 10px grey;
	opacity:0.9999
}
#contactgeneral:hover > #balonn{
	background:white;
	box-shadow: 0 0 10px black, inset 0 0 10px black;
	opacity:0.9999
}
#contactgeneral:hover > #balonnn{
	
	box-shadow: 0 0 10px grey, inset 0 0 10px grey;
	opacity:0.9999
}
#contactgeneral:hover > #bal{
	
	box-shadow: 0 0 10px grey, inset 0 0 10px grey;
	opacity:0.9999
}
#contactgeneral:hover > #plane{
	
	box-shadow: 0 0 10px black, inset 0 0 10px white;
	opacity:0.9999
}
#contactgeneral:hover > #pulsar{
	
	box-shadow: 0 0 10px black, inset 0 0 30px grey;
	opacity:0.9999;
	z-index:-100
}
#star{
	z-index:-10;
}
@keyframes pulsar
{
 	0%{transform:   translateX(150px)  translateY(0px) translateZ(0px);}
 	10%{transform:  translateX(130px)  translateY(25px) translateZ(-100px);background:white}
 	20%{transform:  translateX(120px)  translateY(50px) translateZ(-300px);background:#ECEBD9}
 	30%{transform:  translateX(110px)  translateY(70px) translateZ(-500px);background:white}
 	40%{transform:  translateX(100px)  translateY(90px) translateZ(-300px);background:#ECEBD9 }
 	50%{transform:  translateX(-200px)   translateY(110px) translateZ(-100px);background:white }
 	60%{transform:  translateX(-300px)  translateY(190px) translateZ(100px);background:#ECEBD9 }
 	70%{transform:  translateX(-210px)  translateY(270px) translateZ(300px);background:white }
 	80%{transform:  translateX(170px)  translateY(150px) translateZ(500px);background:#ECEBD9 }
 	90%{transform:  translateX(130px)  translateY(25px) translateZ(300px);background:white }
 	100%{transform:  translateX(150px) translateY(0px) translateZ(100px);background:#ECEBD9 }
}
@keyframes rotk
{
 	0%{transform:   translateX(-550px)  translateY(0px) translateZ(0px);}
 	10%{transform:  translateX(-450px)  translateY(25px) translateZ(-100px);}
 	20%{transform:  translateX(-350px)  translateY(50px) translateZ(-300px);}
 	30%{transform:  translateX(-250px)  translateY(70px) translateZ(-500px);}
 	40%{transform:  translateX(-150px)  translateY(90px) translateZ(-300px);background:grey }
 	50%{transform:  translateX(-50px)   translateY(110px) translateZ(-100px);background:black }
 	60%{transform:  translateX(-150px)  translateY(190px) translateZ(100px);background:grey }
 	70%{transform:  translateX(-250px)  translateY(270px) translateZ(300px);}
 	80%{transform:  translateX(-350px)  translateY(150px) translateZ(500px);}
 	90%{transform:  translateX(-450px)  translateY(25px) translateZ(300px);}
 	100%{transform:  translateX(-550px) translateY(0px) translateZ(100px);}
}
@keyframes roto
{
 	0%{transform:   translateX(-400px) translateY(300px) translateZ(10px);}
 	10%{transform:  translateX(-300px) translateY(255px) translateZ(-30px);}
 	20%{transform:  translateX(-200px) translateY(150px) translateZ(-30px);}
 	30%{transform:  translateX(-100px) translateY(90px) translateZ(-50px);}
 	40%{transform:  translateX(-50px) translateY(70px) translateZ(-30px);}
 	50%{transform:  translateX(-10px) translateY(60px) translateZ(-10px);}
 	55%{transform:  translateX(-0px) translateY(10px) translateZ(-10px);}
 	59%{transform:  translateX(-10px) translateY(70px) translateZ(10px);}
 	60%{transform:  translateX(-50px) translateY(70px) translateZ(10px);}
 	70%{transform:  translateX(-100px) translateY(90px) translateZ(30px); }
 	80%{transform:  translateX(-200px) translateY(150px) translateZ(50px);}
 	90%{transform:  translateX(-300px) translateY(255px) translateZ(30px);}
 	100%{transform:  translateX(-400px) translateY(300px) translateZ(10px);}
}
@keyframes rob
{
 	0%{transform:   translateX(300px) translateY(0px) translateZ(10px);}
 	10%{transform:  translateX(250px) translateY(25px) translateZ(-10px);}
 	20%{transform:  translateX(200px) translateY(50px) translateZ(-30px);}
 	30%{transform:  translateX(150px) translateY(70px) translateZ(-50px);}
 	40%{transform:  translateX(100px) translateY(90px) translateZ(-30px);background:grey}
 	50%{transform:  translateX(50px) translateY(110px) translateZ(-10px);background:gray}
 	60%{transform:  translateX(100px) translateY(150px) translateZ(10px);background:black}
 	70%{transform:  translateX(150px) translateY(170px) translateZ(30px);background:grey }
 	80%{transform:  translateX(200px) translateY(130px) translateZ(50px);background:gray }
 	90%{transform:  translateX(250px) translateY(25px) translateZ(30px);}
 	100%{transform:  translateX(300px) translateY(0px) translateZ(10px);}
}
@keyframes rotek
{
 	0%{transform:   translateX(-250px) translateY(300px) translateZ(10px);}
 	5%{transform:   translateX(-270px) translateY(300px) translateZ(0px);}
 	10%{transform:  translateX(-300px) translateY(200px) translateZ(-10px);}
 	20%{transform:  translateX(-200px) translateY(150px) translateZ(-30px);}
 	30%{transform:  translateX(-100px) translateY(100px) translateZ(-50px);}
 	35%{transform:  translateX(0px) translateY(100px) translateZ(-50px);}
 	40%{transform:  translateX(100px) translateY(50px) translateZ(-30px);background:grey}
 	50%{transform:  translateX(0px) translateY(0px) translateZ(-10px);background:gray}
 	60%{transform:  translateX(-100px) translateY(50px) translateZ(10px);background:black}
 	70%{transform:  translateX(-200px) translateY(100px) translateZ(30px);background:grey }
 	80%{transform:  translateX(-300px) translateY(150px) translateZ(50px);background:gray }
 	90%{transform:  translateX(-270px) translateY(200px) translateZ(30px);}
 	100%{transform:  translateX(-250px) translateY(300px) translateZ(10px);}
}
@keyframes plane
{
 	0%{transform:   translateX(-450px) translateY(300px) translateZ(10px);}
 	5%{transform:   translateX(-370px) translateY(270px) translateZ(0px);}
 	10%{transform:  translateX(-270px) translateY(250px) translateZ(-10px);}
 	20%{transform:  translateX(-170px) translateY(230px) translateZ(-30px);}
 	30%{transform:  translateX(-100px) translateY(210px) translateZ(-50px);}
 	35%{transform:  translateX(0px) translateY(190px) translateZ(-50px);}
 	40%{transform:  translateX(50px) translateY(180px) translateZ(-30px);background:#524947}
 	50%{transform:  translateX(1px) translateY(190px) translateZ(-10px);background:#716C6B}
 	60%{transform:  translateX(-200px) translateY(210px) translateZ(10px);background:white}
 	70%{transform:  translateX(-300px) translateY(230px) translateZ(30px);background:#716C6B }
 	80%{transform:  translateX(-400px) translateY(250px) translateZ(50px);background:#524947 }
 	90%{transform:  translateX(-410px) translateY(270px) translateZ(30px);}
 	100%{transform:  translateX(-450px) translateY(300px) translateZ(10px);}
}
</style>
	

<div id='contactgeneral'>
	<form id="letter">
		<span id="msg" style='display:none'>Mesajınız Başarı İle İletildi</span>	
		<input type='text' placeholder='İsim Soyisim'>
		<input type='email' placeholder='E-mail'>
		<textarea></textarea>
		<button id="sub" type='button'>İlet</button>
	</form>
<div id="bal"></div>
<div id="balonnn"></div>
<div id="balonn"></div>
<div id="balon"></div>
<div id="plane"></div>
<div id="pulsar"></div>
	<div id="contactinfo">
		<h2>İletişime Geçin</h2>
		<ul>
			<li><b>Tel</b> - 0551 194 44 32</li>
			<li><b>E-mail</b> - mentalkod09@gmail.com</li>
			<li><b>Adres</b> - Aydın/Didim</li>
			<li><b>Linkedin</b> - Hamza Atmaca</li>
		</ul>
	</div>
</div>

`;



class Contact extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'});
		this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true));
	}
	connectedCallback(){
		this.shadowRoot.querySelector('#sub').addEventListener('click',()=>{
			this.shadowRoot.querySelector('#msg').style.display="block";
			setTimeout(()=>{
				this.shadowRoot.querySelector('#msg').style.display="none";
			},2000)
		})
	}
	disconnectedCallback(){
			this.shadowRoot.querySelector('#sub',removeEventListener('click'))		
	}
}

window.customElements.define('con-link',Contact);