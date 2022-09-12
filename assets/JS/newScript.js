var initials = document.getElementById("#initials");

var mostRecentScore = JSON.parse(localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var numHighScores = 5;

initials.addEventListener("click", () =>  {
    console.log(initials.value);
    saveScoreBtn.disabled = !initials.value;});

