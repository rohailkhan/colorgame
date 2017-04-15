var rgb=[
"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)" ]

var squares=document.querySelectorAll("#square");
var pickedcolor=rgb[0];
var message=document.querySelector("#message");

for(var i=0;i<squares.length;i++){
	//add colors to squares
	squares[i].style.background=rgb[i];
	//add event listeners
	squares[i].addEventListener("click" , function(){
		//grab color of the click
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
			console.log("right color")
			message.textContent="thats right"; }
		else 
			{this.style.background="grey";}
	});
}

var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;

// function randomcolors(){
// 	arr=[];
// 	arr.push(random);
// 	}
// function random(){
// 	var r=Math.floor(Math.random()*256);
// 	var g=Math.floor(Math.random()*256);
// 	var b=Math.floor(Math.random()*256);

// 	return "rgb("r"," g"," b")"
// }