//initial variable setting
var score = 0;
var ppc = 1;
var pps = 0;
var UO = [0, 0, 0, 0, 0, 0];
var Price = [10, 100, 80, 800, 6400, 64000];
//things to happen immediatley after variables are set
function displayVariables() {
  const variableIds = ['score-counter', 'pps-counter', 'ppc-counter'];
  const upgradeIds = ['u0', 'u1', 'u2', 'u3', 'u4', 'u5'];
  const priceIds = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5'];

  variableIds.forEach((id, index) => {
    document.getElementById(id).innerHTML = [score, pps, ppc][index];
  });

  upgradeIds.forEach((id, index) => {
    document.getElementById(id).innerHTML = UO[index];
  });

  priceIds.forEach((id, index) => {
    document.getElementById(id).innerHTML = Price[index];
  });
}


checkAllButtons();
displayVariables();

//increases the score when the button is clicked
function increaseScore() {
   score += ppc;
	checkAllButtons();
   displayVariables();
}

//points per second function
setInterval(function() {
	score += pps;
	checkAllButtons();
	displayVariables();
},1000);

//functions for upgrade purchases
function buyPpsUpgrade(upgradePrice, upgradeGain, upgradeNumber) {
	if (score >= upgradePrice) {
		score -= upgradePrice;
		pps += upgradeGain;
		UO[upgradeNumber] += 1;
		Price[upgradeNumber] += Math.round(Price[upgradeNumber] * 0.1);
		}
	checkAllButtons();
	displayVariables();
}
function buyPpcUpgrade(upgradePrice, upgradeGain, upgradeNumber) {
	if (score >= upgradePrice) {
		score -= upgradePrice;
		ppc += upgradeGain;
		UO[upgradeNumber] += 1;
		Price[upgradeNumber] += Math.round(Price[upgradeNumber] * 0.1);
		}
	checkAllButtons();
	displayVariables();
}
//button clickability functions
function checkButton(buttonNumber) {
  if (score >= Price[buttonNumber]) {
     document.getElementById('b' + buttonNumber).className = "clickable";
  } else {
     document.getElementById('b' + buttonNumber).className = "unclickable";
  }
}


function checkAllButtons() {
  for (let i = 0; i < Price.length; i++) {
    checkButton(i);
  }
}



