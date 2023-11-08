//* Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];

// console.log(form.name)
// console.log(Object.values(form))
// console.log(form[0].placeholder);

//* Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('Hit!')

    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    // console.log(animal);
    animals.push(animal);
    // console.log(animals);

    form.reset();
    form[0].focus();
    
    displayTable();
})


// TODO: Display to Table (function)
function displayTable() {
    // console.log('DT: ', animals);

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    animals.forEach((animal, i) => {
        // Create
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        // Assign
        id.textContent = i + 1;
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

        // Append
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}
