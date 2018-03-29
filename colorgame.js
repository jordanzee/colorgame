
var numofsquares = 6;
var colors = [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorRGB");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

init();

function init(){
	modebtns();	
	setupsquares();
	resets();
}

function setupsquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent= "Correct!";
			changeColors(clickedColor);
			h1.style.background= clickedColor;
			reset.textContent= "Play AGain!";
		}
		else {
			this.style.background = "#065e1c";
			messageDisplay.textContent= "Try Again";
			}			
		});
	}
}

function modebtns(){
	for(var i =0;i<modebtn.length;i++){
		modebtn[i].addEventListener("click", function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numofsquares = 3: numofsquares = 6;
			resets();
		});
	}
}

function resets(){
	colors = getRandomColor(numofsquares)
	pickedColor = pickedColor1();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background=colors[i];
		} else{
			squares[i].style.display = "none";
		}
	   }

	h1.style.background="steelblue";
	reset.textContent= "New Colors again!";
	messageDisplay.textContent = "" ;
}



// easybtn.addEventListener("click",function(){
// 	easybtn.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	numofsquares=3;
// 	colors = getRandomColor(3)
// 	pickedColor = pickedColor1();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 		squares[i].style.background=colors[i];
// 	   }	else{
// 	   		   squares[i].style.display = "none";
// 	   }
// 	}
// 	h1.style.background="steelblue";
// })

// hardbtn.addEventListener("click",function(){
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numofsquares=3;
// 	colors = getRandomColor(numofsquares)
// 	pickedColor = pickedColor1();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.background=colors[i];
// 	   	  squares[i].style.display = "block";
// 	   }
// 	h1.style.background="steelblue";
// })


reset.addEventListener("click", function(){
	resets();

})

colorDisplay.textContent = pickedColor;





function getRandomColor(num) {
	var arr = []
	for(var i = 0; i<num;i++){
		arr.push(randomColor())
	}
   return arr
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickedColor1(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}