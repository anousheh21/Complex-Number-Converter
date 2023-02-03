const xInput = document.querySelector('.inputx');

const yInput = document.querySelector('.inputy');

const button = document.querySelector('.submit');
const output = document.querySelector('.output');

const z = 3;

button.addEventListener('click', () => {
    let x = parseInt(xInput.value);
    let y = parseInt(yInput.value);
    if(xInput.value=='' || yInput.value=='') {
        output.textContent = 'Values Required'
    } else {
        output.textContent = `x = ${x}  y = ${y}`;
    }
   
});

