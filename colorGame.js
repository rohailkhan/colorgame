var rgb=randomcolors(6);

var squares=document.querySelectorAll("#square");
var pickedcolor=pickColor();
var message=document.querySelector("#message");
var h1=document.querySelector("#headingdiv");
var reset=document.querySelector("#reset");
var colordisplay=document.getElementById("colordisplay");
reset.addEventListener("click" , function(){
	var rgb=randomcolors(6);
	var pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	console.log(pickedcolor);
		for(i=0;i<squares.length;i++){
			squares[i].style.background=rgb[i];
		}
	})

function pickColor() {
	var random = Math.floor(Math.random() * rgb.length);
	return rgb[random];
}
for(var i=0;i<squares.length;i++){
	//add colors to squares
	squares[i].style.background=rgb[i];
	// restart();
	//add event listeners
	squares[i].addEventListener("click" , function(){
		//grab color of the click

		var clickedcolor=this.style.background;
		console.log(clickedcolor);
		if(clickedcolor===pickedcolor){
			console.log("right color")
			message.textContent="thats right"; 
			allsame();
			h1.style.background=clickedcolor;}
		else 
			{this.style.background="grey"; message.textContent="thats wronggggggg";
		}
	});
}


colordisplay.textContent=pickedcolor;
console.log(pickedcolor);

function allsame(){
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=pickedcolor;

	}
}
function randomcolors(num){
	arr=[];
	for(var i=0;i<=num;i++){
	arr.push(random());}
	return arr;
	}
function random(){
		//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
// function pickcolor(){
// 	var random=Math.floor(Math.random()*rgb.length);
// 	restart rgb[random]
// }
//reset function restarts everything
// function restart(){
	
// 	reset.addEventListener("click" , function(){
// 		for(i=0;i<squares[i];i++){
// 			squares[i].style.background=rgb[i];
// 		}
// 	});
// }