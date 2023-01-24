let scoreLeft = document.getElementById('score-left')
let scoreRight = document.getElementById('score-right')

currentScoreL = 0
currentScoreR = 0

function addScore(team, scoreToAdd) {
  if (team == 'home') {
    currentScoreL += scoreToAdd
    scoreLeft.textContent = currentScoreL
  } else {
    currentScoreR += scoreToAdd
    scoreRight.textContent = currentScoreR
  }
}
