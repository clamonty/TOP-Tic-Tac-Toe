
  const game = {
    gameboard: [this.square1, this.square2, this.square3, this.square4, this.square5, this.square6, this.square7, this.square8, this.square9],
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
    },
    bindEvents: function() {
      this.allSquares.forEach(square => {
        square.addEventListener('click', (e) => {
          e.target.textContent = "o";
        });
      });
      this.restartBtn.addEventListener('click', () => {
        this.allSquares.forEach(square => {
          square.textContent = "";
        })
      })
    },
  }
  game.init();