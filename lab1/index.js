//divide into files
function onOffClick(rectangle, price) {
    if (rectangle.style.background === 'green') {
        rectangle.style.background = 'gray';
        rectangle.addEventListener('mouseenter', MouseEnter);
        rectangle.addEventListener('mouseleave', MouseLeave);
        updateTotal(-price); 
    } else {
        rectangle.style.background = 'green';
        rectangle.removeEventListener('mouseenter', MouseEnter);
        rectangle.removeEventListener('mouseleave', MouseLeave);
        updateTotal(price); 
    }
}

function MouseEnter(rectangle) {
    if (rectangle.style.background !== 'green') {
        rectangle.style.background = 'darkblue';
    }
}

function MouseLeave(rectangle) {
    if (rectangle.style.background !== 'green') {
        rectangle.style.background = 'gray';
    }
}

function updateTotal(amount) {
    const totalElement = document.getElementById('total');
    let currentTotal = parseInt(totalElement.textContent) || 0;
    totalElement.textContent = currentTotal + amount + ' грн';
}

const rows = [document.getElementById('row1'), document.getElementById('row2'), document.getElementById('row3')];
const prices = [150, 250, 450];

//searching methods

rows.forEach((row, index) => {
    for (let i = 0; i < 5 + index * 2; i++) { 
        let rectangle = document.createElement('button');
        rectangle.classList.add('row');

        rectangle.addEventListener('mouseenter', () => MouseEnter(rectangle));
        rectangle.addEventListener('mouseleave', () => MouseLeave(rectangle));

        rectangle.onclick = function () {
            onOffClick(rectangle, prices[index]);
        };

        row.appendChild(rectangle);
    }
});