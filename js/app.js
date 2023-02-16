 function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length=== 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
  
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbersField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumbersField.value ='';
        }
        else if(number === '<'){
const digits =previousTypedNumbers.split('');
digits.pop();
const remainingDigits = digits.join('');
typedNumbersField.value =remainingDigits;
        }
    }
    else{
       
       
        const newTypedNumbers =previousTypedNumbers + number;
        typedNumbersField.value = newTypedNumbers;
    }

})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
if(typedNumbers === currentPin){
    pinSuccessMessage.style.display = 'block';
    pinFailureMessage.style.display = 'none';
}
else{
    pinFailureMessage.style.display = 'block';
    pinSuccessMessage.style.display = 'none';
}
})