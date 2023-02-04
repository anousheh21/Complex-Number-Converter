const inputMod = document.querySelector('.inputmod');
const inputArg = document.querySelector('.inputarg');
const button = document.querySelector('.submit');
const displayModArg = document.querySelector('.displayModarg');
const output = document.querySelector('.output');
const showIcon = document.querySelector('.showIcon');
const autoTheta = document.querySelector('.autotheta');

button.addEventListener('click', () => {
    let n = parseFloat(inputMod.value);
    let theta = parseFloat(inputArg.value);
    let x = 0;
    let y = 0;
    if (inputMod.value=='' || inputArg.value=='') {
        output.textContent = 'Values Required';
        displayModArg.textContent = '';
        showIcon.textContent='';
    } else {
        x = n*(Math.cos(theta));
        y = n*(Math.sin(theta));
        if (Number.isInteger(x)) {
            x=x;
        } else {
            x=x.toFixed(2);
        }
        if (Number.isInteger(y)) {
            y=y;
        } else {
            y=y.toFixed(2);
        }
        inputMod.value = '';
        inputArg.value = '';
        output.textContent=`${x} + ${y}i`;
        showIcon.textContent='arrow_downward';
        displayModArg.textContent=`${n} cos(${theta}) + ${n}i sin (${theta})`;
    }
});

