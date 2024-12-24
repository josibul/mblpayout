// console.log('added extra btn response')

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    

    const phoneNumber =document.getElementById('phone-number').value
    const pinNumber =document.getElementById('pin-number').value
    
    console.log(phoneNumber,pinNumber)

    if("5"===phoneNumber && pinNumber==="1234" ){
        console.log('logged in');
        window.location.href='/home.html';
    }
    else{
        alert('wrong pass')
    }
})