function getRest() {
    const returnMessage = (value) => {
        if (isNaN(value)){
            return document.getElementById('result').innerHTML = `Your rest is ${value[0]} dollars, ${value[1]} cents.`
        }
        return document.getElementById('result').innerHTML = `Your rest is ${value} dollars.`
    }

    let sum = parseFloat(document.getElementById('sum').value);
    let price = parseFloat(document.getElementById('price').value);

    if (isNaN(sum) == true) sum = 0;
    if (isNaN(price)==true) price = 0;
    
    const rest = sum - price;
    // to avoid a lot of number after coma because of JS
    const restFixed = rest.toFixed(2)
    const restAsString = String(restFixed);
    if (restAsString.includes('.')) {
        const restAsArray = restAsString.split('.')
        
        return returnMessage(restAsArray)
    }
    return returnMessage(rest)

}