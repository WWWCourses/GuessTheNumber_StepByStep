/* -------------------------------------------------------------------------- */
/*                             Auxilary functions                             */
/* -------------------------------------------------------------------------- */
function resetGame() {
	// UI
	dom.gamePlayground.classList.add('hidden');
	dom.guessHistory.classList.add('hidden');
	dom.levelStatus.classList.add('hidden');
	dom.gameEndArea.classList.add('hidden');

	// state
}

function initGameState(selectedLevel) {
	gameState.minRange = levelDict[selectedLevel].range[0];
	gameState.maxRange = levelDict[selectedLevel].range[1];
	// binary search: maxTries = log(base2)(maxRange-minrange)
	gameState.maxTries = Math.ceil(Math.log2(gameState.maxRange - gameState.minRange));

	gameState.machineNumber = Math.round(Math.random()
							  * ( gameState.maxRange - gameState.minRange )
							  + gameState.minRange );
}

/* -------------------------------------------------------------------------- */
/*                          Events handlers functions                         */
/* -------------------------------------------------------------------------- */
function startPlay(e) {
	const selectedLevel = dom.selectLevelInput.value;
	console.log(`selectedLevel: ${selectedLevel}`);

	initGameState(selectedLevel);

	const msg = `You are playing level ${levelDict[selectedLevel].name}`;

	console.dir(gameState);
	console.dir(msg);

}

/* -------------------------------------------------------------------------- */
/*                              Gloabal Variables                             */
/* -------------------------------------------------------------------------- */
const levelDict = {
	'level1': {
		'range': [1, 10],
		'name': 'Easy',
	},
	'level2': {
		'range': [1, 50],
		'name': 'Basic'
	},
	'level3': {
		'range': [1, 100],
		'name': 'Master'
	},
}

const dom = {
	gamePlayground: document.querySelector('.game-playground'),
	guessHistory: document.querySelector('.guess-history'),
	levelStatus: document.querySelector('.level-status'),
	gameEndArea: document.querySelector('.game-end-area'),
	playerGuessInput: document.querySelector('.user-input-area input[type="number"]'),
	btnStartPlay: document.querySelector('.btn-start-play'),
	selectLevelInput: document.querySelector('select[name="selectLevel"]'),
}

const gameState = {
	'machineNumber': undefined,
	'playerGuess': undefined,
	'minRange': undefined,
	'maxRange': undefined,
};


/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */
// click on btnStartPlay
dom.btnStartPlay.addEventListener('click', startPlay);


// click on btnResetGame

// click on btnGuess
// same, when user press Enter in user-guess input

// click on btnStartNewGame

// on page load
window.onload = (event) => {
	resetGame();
};


