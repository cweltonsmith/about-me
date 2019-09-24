function calculations() {
    
    //Passes string and returns float
    const weight = parseFloat(document.querySelector('#weight-field').value)
    const moment = parseFloat(document.querySelector('#moment-field').value)

    //Doing all the simple calculations
    const CG = (moment / weight)

    //Modifying HTML page with the calculations output
    document.querySelector('#total-amount').innerHTML = `${CG.toFixed(2)}`
}


//On click perform the calculation function
document.querySelector('#calculate').addEventListener('click', calculations)


