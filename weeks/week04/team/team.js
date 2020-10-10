const board = document.querySelector('.board');
const winner = document.getElementById('winner');

const player1 = 'X';
const player2 = 'O';
var player = player1;
var prevPlayer = '';

function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  if (player === player1) {
    prevPlayer = player;
    player = player2;
  } else {
    prevPlayer = player;
    player = player1;
  }
  won();
}

function reset() {
  for (let i = 0; i < board.rows.length; i++) {
    for (let j = 0; j < board.rows[i].cells.length; j++) {
      board.rows[i].cells[j].innerHTML = '';
    }
  }
}

function won() {
  console.log(
    board.rows[0].cells[0].innerHTML,
    board.rows[0].cells[1].innerHTML
  );
  if (
    board.rows[0].cells[0].innerHTML === board.rows[0].cells[1].innerHTML &&
    board.rows[0].cells[1].innerHTML === board.rows[0].cells[2].innerHTML &&
    board.rows[0].cells[0].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[1].cells[0].innerHTML === board.rows[1].cells[1].innerHTML &&
    board.rows[1].cells[1].innerHTML === board.rows[1].cells[2].innerHTML &&
    board.rows[1].cells[0].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[2].cells[0].innerHTML === board.rows[2].cells[1].innerHTML &&
    board.rows[2].cells[1].innerHTML === board.rows[2].cells[2].innerHTML &&
    board.rows[2].cells[0].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[0].cells[0].innerHTML === board.rows[1].cells[0].innerHTML &&
    board.rows[1].cells[0].innerHTML === board.rows[2].cells[0].innerHTML &&
    board.rows[0].cells[0].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[0].cells[1].innerHTML === board.rows[1].cells[1].innerHTML &&
    board.rows[1].cells[1].innerHTML === board.rows[2].cells[1].innerHTML &&
    board.rows[0].cells[1].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[0].cells[2].innerHTML === board.rows[1].cells[2].innerHTML &&
    board.rows[1].cells[2].innerHTML === board.rows[2].cells[2].innerHTML &&
    board.rows[0].cells[2].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[0].cells[0].innerHTML === board.rows[1].cells[1].innerHTML &&
    board.rows[1].cells[1].innerHTML === board.rows[2].cells[2].innerHTML &&
    board.rows[0].cells[0].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else if (
    board.rows[0].cells[2].innerHTML === board.rows[1].cells[1].innerHTML &&
    board.rows[1].cells[1].innerHTML === board.rows[0].cells[2].innerHTML &&
    board.rows[0].cells[2].innerHTML !== ''
  )
    winner.innerHTML += `<h1>Player ${prevPlayer} Won!!</h1>`;
  else {
  }
}
board.addEventListener('click', addPiece);
