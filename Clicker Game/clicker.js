//initial variable setting
var score = 0;
var ppc = 1;
var pps = 0;
//things to happen immediatley after variables are set
function displayVariables() {
document.getElementById('score-counter').innerHTML= score;
document.getElementById('pps-counter').innerHTML= pps;
document.getElementById('ppc-counter').innerHTML= ppc;
}
displayVariables();

//increases the score when the button is clicked
function increaseScore() {
   score += ppc;
   displayVariables();
}

//points per second function
setInterval(function() {
	score += pps;
	displayVariables();
},1000);

//functions for upgrade purchases
function buyPpsUpgrade(upgradePrice, upgradeGain) {
	console.log(upgradePrice, upgradeGain)
	if (score >= upgradePrice) {
		score -= upgradePrice;
		pps += upgradeGain;
		}
	displayVariables();
}
function buyPpcUpgrade(upgradePrice, upgradeGain) {
	console.log(upgradePrice, upgradeGain)
	if (score >= upgradePrice) {
		score -= upgradePrice;
		ppc += upgradeGain;
		}
	displayVariables();
}