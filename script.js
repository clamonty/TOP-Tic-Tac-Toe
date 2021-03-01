
  const game = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.square1 = document.querySelector('.square1');
      this.square2 = document.querySelector('.square2');
      this.square3 = document.querySelector('.square3');
      this.square4 = document.querySelector('.square4');
      this.square5 = document.querySelector('.square5');
      this.square6 = document.querySelector('.square6');
      this.square7 = document.querySelector('.square7');
      this.square8 = document.querySelector('.square8');
      this.square9 = document.querySelector('.square9');
      this.allSquares = document.querySelectorAll('.gamesquare');
      this.restartBtn = document.querySelector('.restart-btn');
      this.difficulty = document.querySelector('#difficulty');
      this.selectX = document.querySelector('.select-x');
      this.selectO = document.querySelector('.select-o');
      this.circleSelect = document.querySelector('.circle-select');
      this.crossSelect = document.querySelector('.cross-select');
    },
    bindEvents: function() {
      this.allSquares.forEach(square => {
        square.addEventListener('click', (e) => {
          if (e.target.textContent == '') {
            e.target.textContent = this.getPlayerSymbol();
            this.checkPlayerWin();
            computer.makeMove();
            this.checkCompWin();
            this.checkForTie();
          } else {
            return;
          }
        });
      });
      this.restartBtn.addEventListener('click', () => {
        this.resetBoard();
      });
      this.crossSelect.addEventListener('click', () => {
        this.toggleChecked(this.crossSelect);
      });
      this.circleSelect.addEventListener('click', () => {
        this.toggleChecked(this.circleSelect);
      });
    },
    toggleChecked: function(el) {
      if (el.classList.contains('checked')) {
        return;
      } else {
        this.crossSelect.classList.toggle('checked');
        this.circleSelect.classList.toggle('checked');
        this.resetBoard();
      }
    },
    getPlayerSymbol: function() {
      if (this.crossSelect.classList.contains('checked')) {
        return this.crossSelect.textContent;
      } else {
        return this.circleSelect.textContent;
      }
    },
    resetBoard: function() {
      this.allSquares.forEach(square => {
        square.textContent = "";
      });
    },
    checkTopRow: function(symbol) {
      return (this.allSquares[0].textContent == symbol
      && this.allSquares[1].textContent == symbol
      && this.allSquares[2].textContent == symbol);
    },
    checkLeftRow: function(symbol) {
      return (this.allSquares[0].textContent == symbol
        && this.allSquares[3].textContent == symbol
        && this.allSquares[6].textContent == symbol);
    },
    checkRightRow: function(symbol) {
      return (this.allSquares[2].textContent == symbol
        && this.allSquares[5].textContent == symbol
        && this.allSquares[8].textContent == symbol);
    },
    checkBottomRow: function(symbol) {
      return (this.allSquares[6].textContent == symbol
        && this.allSquares[7].textContent == symbol
        && this.allSquares[8].textContent == symbol);
    },
    checkMiddleRow: function(symbol) {
      return (this.allSquares[3].textContent == symbol
        && this.allSquares[4].textContent == symbol
        && this.allSquares[5].textContent == symbol);
    },
    checkDiagonalRight: function(symbol) {
      return (this.allSquares[0].textContent == symbol
        && this.allSquares[4].textContent == symbol
        && this.allSquares[8].textContent == symbol);
    },
    checkDiagonalLeft: function(symbol) {
      return (this.allSquares[2].textContent == symbol
        && this.allSquares[4].textContent == symbol
        && this.allSquares[6].textContent == symbol);
    },
    checkPlayerWin: function() {
      let playerSymbol = this.getPlayerSymbol();
      if (this.checkTopRow(playerSymbol) || this.checkRightRow(playerSymbol) ||
          this.checkBottomRow(playerSymbol) || this.checkLeftRow(playerSymbol) ||
          this.checkDiagonalRight(playerSymbol) || this.checkDiagonalLeft(playerSymbol) || this.checkMiddleRow(playerSymbol)) 
      {
        console.log('Player has won!');
        return true;
      }
      return false;
    },
    checkCompWin: function() {
      let compSymbol = computer.getCompSymbol();
      if (this.checkTopRow(compSymbol) || this.checkRightRow(compSymbol) ||
      this.checkBottomRow(compSymbol) || this.checkLeftRow(compSymbol) ||
      this.checkDiagonalRight(compSymbol) || this.checkDiagonalLeft(compSymbol) || this.checkMiddleRow(compSymbol)) 
      { 
        console.log('Computer has won!');
        return true;
      }
      return false;
    },
    checkForTie: function() {
      if (this.checkIfBoardFull() && !this.checkPlayerWin() && !this.checkCompWin()) {
        console.log(`It's a tie!`);
      }
    },
    checkIfBoardFull: function() {
      for (let i = 0; i < this.allSquares.length; i++) {
        if (this.allSquares[i].textContent == '') {
          return false;
        } 
      }
      return true;
    },
  }
  game.init();

const computer = {
  chooseRandomSquare: function() {
    return Math.floor(Math.random() * 9);
  },
  getCompSymbol: function() {
    if (game.crossSelect.classList.contains('checked')) {
      return 'o';
    } else {
      return 'x';
    }
  },
  makeMove: function() {
    while (true) {
      let compSymbol = this.getCompSymbol();
      let move = this.chooseRandomSquare();
      if (game.checkIfBoardFull()) {
        break;
      }
      if (game.allSquares[move].textContent == '') {
        game.allSquares[move].textContent = compSymbol;
        break;
      } else {
        continue;
      }
    }
  },
  getEmptySquares: function(board) {
    return [...board].filter(square => (square.textContent != 'o' && square.textContent != 'x'));
  },

}