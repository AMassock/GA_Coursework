
let colorSelection = document.querySelector('#set-color');
let brush = document.querySelector('.brush');

colorSelection.addEventListener('click', colorChange => {
    event.preventDefault();
    let color = document.getElementById('color-field').value;
    brush.style.backgroundColor = color;
    return brush.style.backgroundColor;
});

for(let i = 0; i < 8000; i++) {
    let allDivs = document.createElement('div');
    document.body.appendChild(allDivs);
    allDivs.classList.add(`square`);
    allDivs.id = `js-square ${[i + 1]}`;
};

let square = document.querySelectorAll('.square')

square.forEach(changeSquareColor => {
    changeSquareColor.addEventListener('mouseover', function() {
        let selectedColor = brush.style.backgroundColor;
        this.style.backgroundColor = selectedColor;
    })
})