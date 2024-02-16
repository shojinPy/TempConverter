const checkCelsius = document.querySelector('#celsius');
const checkFahren = document.querySelector('#fahrenheit');

// convert button
document.querySelector('#convertBtn').onclick = function(){
    const inputNum = document.querySelector('#number').value;
    const toNum = Number(inputNum);

    // conversion
    if(checkCelsius.checked){
        let toCelsi = (toNum-32)/1.8;
        document.querySelector('#result').value = toCelsi.toFixed(2)+"°C";
    }
    else if(checkFahren.checked){
        let toFahren = (toNum*1.8)+32;
        document.querySelector('#result').value = toFahren.toFixed(2)+"°F";
    }
    else{
        window.alert("Pick at least one in the convert selection.")
    }
}

//reset button
document.querySelector('#resetBtn').onclick = function(){
    document.querySelector('#number').value = '';
    document.querySelector('#result').value = '';
}