function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
function closeMenu(){
	document.getElementById("menu").classList.remove("change");
	document.getElementById("nav").classList.remove("change");
	document.getElementById("menu-bg").classList.remove("change-bg");
}
function converter(){
	document.getElementById('name').style.textTransform="capitalize";
}
const form= document.getElementById('form');
const n=document.getElementById('name');
const mailformat =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const u_email=document.getElementById('email');
form.addEventListener('submit',(e)=>{
	if(n.value.length==' '|| n.value.length<6)
	{   
		alert("Enter your full name");
		e.preventDefault();
	}
	if(u_email.value.match(mailformat))
	{    
		return true;
	}
	else{
		  alert("Enter valid e-mail adress");
		  e.preventDefault();  
	} 
	form.reset();
});