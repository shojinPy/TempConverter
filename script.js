const checkCelsius = document.getElementById('celsius');
const checkFahren = document.getElementById('fahrenheit');

// convert button
document.getElementById('convertBtn').onclick = function(){
    const inputNum = document.getElementById('number').value;
    const toNum = Number(inputNum);

    // conversion
    if(checkCelsius.checked){
        let toCelsi = (toNum-32)/1.8;
        document.getElementById('result').value = toCelsi+"°C";
    }
    else if(checkFahren.checked){
        let toFahren = (toNum*1.8)+32;
        document.getElementById('result').value = toFahren+"°F";
    }
    else{
        window.alert("Pick at least one in the convert selection.")
    }
}

//reset button
document.getElementById('resetBtn').onclick = function(){
    document.getElementById('number').value = '';
    document.getElementById('result').value = '';
}