document.querySelector('input[name=agree]').addEventListener('click', (event) => {
    const element = event.target;

    if (element.checked === true) {
        alert('sfsdfdf')
    }
    console.dir(element);
});

document.querySelector('input[name=agree1]').addEventListener('keyup', (event) => {
    const element = event.target;

    console.log(event.target.value);
});

console.log(document.querySelector('input[name=agree]'));
console.log(document.querySelector('input[name=agree1]'));