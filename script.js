async function generate(){
	//Fetch questions.json file data and convert to JSON
  var riddles = await fetch("questions.json");
  var responseJSON = await riddles.json();
	//generate a random number between 0 and 7
  var randIndex = Math.floor(Math.random() * 8);
	//Fetch the question and answer at the random generated index
  var question = responseJSON[randIndex]["question"];
  var answer = responseJSON[randIndex]["answer"];
	//Update the question and answer in DOM
  document.getElementById("question").innerHTML = question;
  var ansDOM = document.getElementById("answer");
  ansDOM.innerHTML = answer;

	//Get the "Show answer" button. Please note that the students can also use document.getElementById for the same
  var button = document.querySelector("#show");
	//Make the button and answer paragraph visible
  button.style.visibility = "visible";
  button.onclick = function(){
    ansDOM.style.visibility = "visible";
  }

	//Make the answer paragraph invisible again
  ansDOM.style.visibility = "hidden";
}