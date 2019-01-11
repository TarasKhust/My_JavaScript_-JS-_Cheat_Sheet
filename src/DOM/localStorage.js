/*localStorage.setItem("number", 1);

console.log(localStorage.getItem("number"));

localStorage.removeItem('number');

localStorage.clear();*/

window.addEventListener('DOMContentLoaded', () => {

    let checkbox = document.getElementById('checbox'),
        change = document.querySelector('activate'),
        form = document.getElementsByTagName('form'[0]);

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'red';
    }

    checkbox.addEventListener('click', () => {
        localStorage.setItem('isChecked', true);
    });

    change.addEventListener('click', () => {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    })

    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('Alex', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('Alex')));

});


