var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresDisplay = document.getElementById('highScoresDisplay')

highScoresDisplay.innerHTML =
highScores.map(score => {
    return `<li class=high-score-list>${score.name} - ${score.score}</li>`;
})
.join('');