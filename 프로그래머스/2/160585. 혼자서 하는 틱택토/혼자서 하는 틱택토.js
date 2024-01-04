function checkTicTacToe(board, sign) {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of rows) {
    if (board[a] == sign 
        && board[b] == sign 
        && board[c] == sign) 
        return true;
  }
  return false;
}

function solution(board) {
  let flatBoard = board.map(val => val.split('')).flat();
  let [oCnt, xCnt] = [0, 0];

  for (const sign of flatBoard) {
    if (sign === 'O') oCnt++;
    else if (sign === 'X') xCnt++;
  }

  if (oCnt < xCnt || oCnt-1>xCnt ) return 0;

  let oWins = checkTicTacToe(flatBoard, 'O');
  let xWins = checkTicTacToe(flatBoard, 'X');

  if (oWins && xWins) return 0;
  if (oWins && oCnt - xCnt !== 1) return 0;
  if (xWins && oCnt !== xCnt) return 0;

  return 1;
}