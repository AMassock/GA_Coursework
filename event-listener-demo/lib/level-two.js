/*
 * DOTS: Level Two
 *
 */
let points = 0000

const dot = document.querySelectorAll('.js-dot');

dot.forEach(value => {
    value.addEventListener('click', function() {
        let score = document.querySelector('.js-score');
        let winner = document.querySelector('body')
        points += 10 

        if(points < 100) {
            score.innerText = `00${points}`
        } else if(points >= 100 && points < 1000) {
            score.innerText = `0${points}`
            winner.classList.add('game-over')
        }
    })
});