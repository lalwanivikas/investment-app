//gets a reference to 'next' and 'back' button
var $nextButton = document.getElementById("nextButton");
var $backButton = document.getElementById("backButton");
var $resultButton = document.getElementById('resultButton');

//gets a reference to 'slides' container which contains all pages
var slidesContainer = document.getElementsByClassName('slides')[0];

//displays result on the final page
var $finalResult = document.getElementById('final_result');
var $result = document.createElement('p');
$finalResult.appendChild($result);

//array for storing answer 1 options (since multiple selections possible)
var answer1List = [];

var option4 = "", option6 = "", option7= "";

//hiding back button on the first slide/page
if(slidesContainer.children[0].classList[0] === 'visible'){
	$backButton.style.display = "none";
}

//make next page/slide visible and hide all other pages/slides 
$nextButton.addEventListener('click', function(){	
	
	//un-hiding the 'back' button on first press of next button
	$backButton.style.display = "inline-block";

	for(var i = 0; i < slidesContainer.children.length - 1; i++) {
		if(slidesContainer.children[i].classList[0] === 'visible'){
			slidesContainer.children[i].classList.remove('visible');
			slidesContainer.children[++i].classList.add('visible');
		}
		
		//hiding back and next buttons on the last slide
		if(i === slidesContainer.children.length - 1) {
			$backButton.style.display = "none";
			$nextButton.style.display = "none";
		}
	}	
});

//make previous page/slide visible and hide all other pages/slides 
$backButton.addEventListener('click', function(){
	for(var i = 0; i < slidesContainer.children.length - 1; i++) {
		if(slidesContainer.children[i].classList[0] === 'visible'){
			slidesContainer.children[i].classList.remove('visible');
			slidesContainer.children[--i].classList.add('visible');
		}
	}
	//hiding back button on the first slide/page
	if(slidesContainer.children[0].classList[0] === 'visible'){
		$backButton.style.display = "none";
	}
});

//extracking answers to question 1
function serviceAnswers(){
	if(this.hasAttribute('checked')) {
		this.removeAttribute('checked');
		answer1List.splice( answer1List.indexOf(this.value), 1 );
	} else {
		this.setAttribute('checked', 'checked');
		answer1List.push(this.value);
	}
	console.log(answer1List);
}

var answer1 = document.querySelectorAll('#question1 input');
for(var i = 0; i < answer1.length; i++) {
	answer1[i].addEventListener('change', serviceAnswers) 
}

//extracking answers to question 2
var answer2 = document.querySelector('#question2 input');
answer2.addEventListener('change', function(){
	console.log(answer2.value);
});

//extracking answers to question 3
var answer3 = document.querySelector('#question3 input');
answer3.addEventListener('change', function(){
	console.log(answer3.value);
});

//extracking answers to question 4
var answer4 = document.querySelectorAll('#question4 input');
for(var i = 0; i < answer4.length; i++) {
	answer4[i].addEventListener('click', function(){
		console.log(this.value);
		option4 = this.value;
	});
}

//extracking answers to question 5
var answer5 = document.querySelector('#question5 input');
answer5.addEventListener('change', function(){
	console.log(answer5.value);
});

//extracking answers to question 6
var answer6 = document.querySelectorAll('#question6 input');
for(var i = 0; i < answer6.length; i++) {
	answer6[i].addEventListener('click', function(){
		console.log(this.value);
		option6 = this.value;
	});
}

//extracking answers to question 7
var answer7 = document.querySelectorAll('#question7 input');
for(var i = 0; i < answer7.length; i++) {
	answer7[i].addEventListener('click', function(){
		console.log(this.value);
		option7 = this.value;
	});
}

/* 
************************
*** Call all answers****
*** collectively *******
************************
*/

$resultButton.addEventListener('click', function(){
	document.querySelector('#final_result h3').style.display = "block";
	this.style.display = 'none';
	
	//displaying results
	$result.innerHTML += answer1List + " <br/>";
	$result.innerHTML += answer2.value + " <br/>";
	$result.innerHTML += answer3.value + "<br/>";
	$result.innerHTML += option4 + "<br/>";
	$result.innerHTML += answer5.value + "<br/>";
	$result.innerHTML += option6 + "<br/>";
	$result.innerHTML += option7 + "<br/>";
});