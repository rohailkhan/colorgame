var rgb=randomcolors(6);
// var numSquares = 6;
var squares=document.querySelectorAll("#square");
var pickedcolor=pickColor();
var message=document.querySelector("#message");
var h1=document.querySelector("#headingdiv");
var reset=document.querySelector("#reset");
var colordisplay=document.getElementById("colordisplay");
var easy=document.getElementById("easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click" ,function(){
	
	hard.classList.remove("selected");
	easy.classList.add("selected");
	// numSquares=3;
	rgb=randomcolors(3);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	
	for(i=0;i<squares.length;i++){
		if(rgb[i]){
			squares[i].style.background=rgb[i];
		}
		else
		{
			squares[i].style.background="none";
		}
	}
	// my way of doing this
	//rgb=randomcolors(6);
	// for(i=0;i<=3;i++){
	// 	squares[i].style.background=rgb[i];


	// }
	// 	squares[3].style.background="none";
	// 	squares[4].style.background="none";
	// 	squares[5].style.background="none";
});
hard.addEventListener("click" ,function(){
	
	hard.classList.add("selected");
	easy.classList.remove("selected");
	// numSquares=6;
	rgb=randomcolors(6);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(i=0;i<6;i++){
		squares[i].style.background=rgb[i];
	}
		
	
	
});


reset.addEventListener("click" , function(){
	rgb=randomcolors(6);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	
		for(i=0;i<squares.length;i++){
			squares[i].style.background=rgb[i];
			console.log(rgb[i]);
		}
		h1.style.background="grey";
	});

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
	for(var i=0;i<num;i++){
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