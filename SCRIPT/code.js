function calculations() {
    
    //Passes string and returns float
    const weight = parseFloat(document.querySelector('#weight-field').value)
    const moment = parseFloat(document.querySelector('#moment-field').value)
    console.log("Getting Ints")

    //Doing all the simple calculations
    const CG = (moment / weight)

    //Modifying HTML page with the calculations output
    document.querySelector('#total-amount').innerHTML = `${CG.toFixed(2)}`
}
function storage(){
    
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const phonenum = document.querySelector("#number").value
    const website = document.querySelector("#website").value
    const message = document.querySelector("#message").value

    localStorage.setItem('ContactName: ', name)
    localStorage.setItem('ContactEmail: ', email)
    localStorage.setItem('ContactPhoneNumber: ', phonenum)
    localStorage.setItem('WebsiteLeft: ', website)
    localStorage.setItem('MessageLeft: ', message)
}

function testcalc(nummoment, numweight){
    return nummoment / numweight
}
//On click perform the calculation function
document.querySelector('#calculate').addEventListener('click', calculations)
document.querySelector('#contact-submit').addEventListener('click', storage)


