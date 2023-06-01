const cntVal = document.querySelector('#counter');

function increment() {
    // Convert value into number from string
    let value = Number(cntVal.innerText);
    // increase the value
    value++;
    // set the value onto UI
    cntVal.innerText = value;
}

function decrement() {
    let value = Number(cntVal.innerText);
    value--;
    cntVal.innerText = value;
}
