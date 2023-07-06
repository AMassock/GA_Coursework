let heading = document.querySelectorAll('.heading');

let newList = document.createElement('ul');
let position = document.querySelector('aside');

heading.forEach(h => {
    newList.appendChild(h);
});

let currentElement = document.querySelector('#section')
document.body.insertBefore(newList, currentElement);

position.appendChild(newList);

// console.log(newList);
