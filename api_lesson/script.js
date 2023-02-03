const url = "http://swapi.dev/api/people";
const submit = document.querySelector('button');
const input = document.querySelector('input').value;
const header = document.querySelector('h1');

fetch(url) 
    .then(results => results.json())
    .then(data => console.log(data.results))
    .catch(err => console.log("whoopsie! Issa borked"))

function trigger(e) {
    e.preventDefault();
    const selection = input.value;
    console.log(selection);
}


submit.addEventListener('click', trigger())