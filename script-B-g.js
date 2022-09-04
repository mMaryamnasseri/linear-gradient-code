var co1=document.querySelector(".color1");
var co2=document.querySelector(".color2");
var h=document.querySelector("h3");
var body1=document.getElementById("Body");

function setgradient(){
	body1.style.background="linear-gradient(to right,"
	+co1.value+","+co2.value+")";
	h.textContent=body1.style.background+";";
	document.querySelector("h1").innerHTML="MARYAM .COM";
}
co1.addEventListener("input",setgradient);
co2.addEventListener("input",setgradient);
