const xInput = document.querySelector('.inputx');

const yInput = document.querySelector('.inputy');

const button = document.querySelector('.submit');
const output = document.querySelector('.output');
const displayCartesian = document.querySelector('.displayCartesian');
const showIcon = document.querySelector('.showIcon');

button.addEventListener('click', () => {
    let x = parseFloat(xInput.value);
    let y = parseFloat(yInput.value);
    let modulus = 0;
    if(xInput.value=='' || yInput.value=='') {
        output.textContent = 'Values Required'
        displayCartesian.textContent = '';
        showIcon.textContent = '';
    } else {
        let pythag = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        if(Number.isInteger(pythag)) {
            modulus = pythag;
        } else {
            modulus = pythag.toFixed(2);
        }
        let argz = Math.atan(y/x).toFixed(3);
        let modarg = `${modulus} cos(${argz})  +  ${modulus}i sin(${argz})`
        output.textContent = modarg;
        showIcon.textContent = 'arrow_downward';
        xInput.value = '';
        yInput.value = '';
        displayCartesian.textContent = `${x} + ${y}i`
    }

});

