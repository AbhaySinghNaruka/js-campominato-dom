/* const playButton = document.getElementById('play');
const eleSquares = document.querySelector('.box');

// INIZIO GIOCO
playButton.addEventListener('click', function() {
    eleSquares.innerHTML = "";  
    const difficulty = document.getElementById("difficulty").value;
    if (difficulty == 1) {
        howMany = 100;
    }
    else if (difficulty == 2) {
        howMany = 81;
    }
    else if (difficulty == 3) {
        howMany = 49;
    }
    for (let i = 1; i <= howMany; i++) {

        if (difficulty == 1){
            eleSquares.innerHTML += `<div class="sq easy">${i}</div>`;
        }
        else if (difficulty == 2){
            eleSquares.innerHTML += `<div class="sq medium">${i}</div>`;
        }
        else if (difficulty == 3){
            eleSquares.innerHTML += `<div class="sq hard">${i}</div>`;
        }  
    }
    const square = document.querySelectorAll('.sq');

    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                square[i].classList.add('selected');
                console.log("Hai selezionato " + (i+1));
            }
        )
    }
    var mines = [];

    while(mines.length < 16) {
        var numMina = Math.floor(Math.random() * howMany) + 1;
        if(mines.indexOf(numMina) === -1) {
            mines.push(numMina);
        }
    }
    
    console.log("Le mine sono " + mines);
    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                if(mines.includes(i+1)) {
                    square[i].classList.add('esplosa');
                    console.log("Hai perso");
                    eleSquares.innerHTML += `<div class="endgame">Hai perso!</div>`;
                }
            }
        )
    }
    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                let victory = document.querySelectorAll('.selected');
                if(victory.length === howMany - 16 && document.querySelectorAll('.esplosa').length === 0){
                    eleSquares.innerHTML += `<div class="endgame">Hai vinto!</div>`;
                }
            }
        )
    }
    const showButton = document.getElementById('show');
    showButton.addEventListener('click', 
        function() {
            for(i=0; i<16; i++) {
                square[mines[i]-1].classList.toggle('mostra-mine');
            }
        }
    )
}); */

const eleSelectLevel = document.querySelector('#select-level');
const eleBtnPlay = document.querySelector('#btn-play');
const eleBtnHelp = document.querySelector('#btn-help');
const eleStartScreen = document.querySelector('.start-screen');
const eleGrid = document.querySelector('.grid');
let arrMines;

eleBtnPlay.addEventListener('click', function () {
    const nCells = parseInt(eleSelectLevel.value);
    //const arrMines = generateMines(16, 1, nCells);
    arrMines = [1, 3, 10, 20];

	eleGrid.innerHTML = '';

	eleGrid.classList.remove('hidden');
	eleStartScreen.classList.add('hidden');

	const sideSquare = Math.sqrt(nCells);
	eleGrid.style.setProperty('--sideSquare', sideSquare);

	for (let i = 1; i <= nCells; i++) {

		const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		eleCell.innerHTML = i;
		eleGrid.append(eleCell);

		eleCell.addEventListener('click', toggleCell);
	}
});

eleBtnHelp.addEventListener('click', function () {
	if (eleBtnHelp.dataset.function == 'show-help') {
		eleBtnHelp.innerHTML = 'Back to game';
		eleBtnHelp.dataset.function = 'show-game';
		eleGrid.classList.add('hidden');
		eleStartScreen.classList.remove('hidden');
	} else if (eleBtnHelp.dataset.function == 'show-game') {
		eleBtnHelp.innerHTML = 'Show help';
		eleBtnHelp.dataset.function = 'show-help';
		eleGrid.classList.remove('hidden');
		eleStartScreen.classList.add('hidden');
	}
});

function toggleCell() {
    if (arrMines.includes(parseInt(this.innerHTML))) {
	    this.classList.add('mine');
    } else {
        this.classList.toggle('no-mine');
    }
}