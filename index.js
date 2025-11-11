const max3 = (number1, number2, number3) => {
    if(number1 > number2 && number1 > number3){
    return number1;
    } if (number2 > number1 && number2 > number3){
    return number2;
    }
    return number3;

};

document.body.innerHTML += max3(11,150,80);