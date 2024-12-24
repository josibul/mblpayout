// console.log('added home page')

// add money to current balance

// step 1 add event listenner to btn

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const inputAmount = document.getElementById('input-amount').value;
    console.log(inputAmount);
    const inputPin = document.getElementById('input-pin').value;
    console.log(inputPin);

    if(inputPin==="1234"){
        console.log('added money to acount')
        const inputAmount = document.getElementById('input-amount').value;
        const newBalance = document.getElementById('balance').innerText;

        const inputAmt =parseFloat(inputAmount);
        const newamt=parseFloat(newBalance);
        const currentBalance = inputAmt+ newamt;
        console.log(currentBalance,newamt,inputAmt)
        document.getElementById('balance').innerText=currentBalance;
    }
    else{
        alert('try again')
    }




})