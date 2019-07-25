$(document).ready(function(){
	console.log("js linked")

	//let submitBtn = document.getElementById("submitButton");
	//submitBtn.addEventListener("click", getPersonality);

	//let resultDiv = document.getElementById("result");
	//resultDiv.style.display = "none";


	let activity = null;
	let diet = null;
	let flight = null;

	let fastFood= {
		count: 0,
		name: "fastFood",
		class: "fastFood",
		img: "https://farm8.staticflickr.com/7402/9068467267_74a828e489_b.jpg",
	};

	let Retail = {
		count: 0,
		name: "Retail",
		class: "Retail",
		img: "http://pngimg.com/uploads/minions/minions_PNG31.png",
	};

	let summerPrograms = {
		count: 0,
		name: "summerPrograms",
		class: "summerPrograms",
		img: "http://pngimg.com/uploads/minions/minions_PNG29.png",
	};

	let results = [fastFood, Retail, summerPrograms];

	

	$("#try-again").click(resetQuiz);
	$("#submit-form").click(processResult);

	function getPersonality() {
		console.log("reset quiz has been called");
		let q1 = $('input[name="q1"]:checked').attr('class');
		let q2 = $('input[name="q2"]:checked').attr('class');
		let q3 = $('input[name="q3"]:checked').attr('class');

		for(let i=0; i < results.length; i++){
			if(q1 === results[i].class) {
				results[i].count++;
			}
			if (q2 === results[i].class) {
				results[i].count++;
			}
			if(q3 === results[i].class) {
				results[i].count++;
			}
			for(let i=0; i<3; i++) {
				console.log(results[i].count);
			}
		}
		let most = results[0]
		for(let i = 0; i < results.length; i++) {
			if(most.count < results[i].count){
				most = results[i];
			}
		}
		console.log(most);
		return most;

		for(let i = 0; i < 4; i++) {
			console.log(results[i].count);
		}

	}

	function processResult(){
		console.log("process result() has been called");
		let q1 = $('input[name="q1"]:checked').attr('class');
		let q2 = $('input[name="q2"]:checked').attr('class');
		let q3 = $('input[name="q3"]:checked').attr('class');
		if (q1 == null || q2 == null || q3 == null){
			alert("Please answer all questions.");
		} else{
			let personality = getPersonality ();
			$("#quiz-Wrapper").hide();
			$("#result").show();
			$("#result").append('<h1 class="name"> You are '+personality.name+' !</h1>');
			$("#result").append('<img src="'+personality.img+'">');
		} 
	}

	function resetQuiz(){
		console.log("resetQuiz() has been called");
		location.reload();
	}


});