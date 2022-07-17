const currentYear = Number(2022);
const firstName = String(prompt('Enter your firstname'));
const lastName = String(prompt('Enter your lastname'));
const day = Number(prompt('Enter the day you were born'));
const month = Number(prompt('Enter the month you were born'));
const year = Number(prompt('Enter the year you were born'));
const yearOld = Number(currentYear - year);

if (month == 12){
    if (day < 22){
        var sign = 'Sagittarius';
        var symbol = '♐';
    }
    else{
        var sign ='Capricorn';
        var symbol = '♑';
    }
}
else if (month == 1){
    if (day < 20){
        var sign = 'Capricorn';
        var symbol = '♑';
    }
    else{
        var sign = 'Aquarius';
        var symbol = '♒';
    }
}
else if (month == 2){
    if (day < 19){
        var sign = 'Aquarius';
        var symbol = '♒';
    }
    else{
        var sign = 'Pisces';
        var symbol = '♓';
    }
}
else if(month == 3){
    if (day < 21){
        var sign = 'Pisces';
        var symbol = '♓';
    }
    else{
        var sign = 'Aries';
        var symbol = '♈';
    }
}
else if (month == 4){
    if (day < 20){
        var sign = 'Aries';
        var symbol = '♈';
    }
    else{
        var sign = 'Taurus';
        var symbol = '♉';
    }
}
else if (month == 5){
    if (day < 21){
        var sign = 'Taurus';
        var symbol = '♉';
    }
    else{
        var sign = 'Gemini';
        var symbol = '♊';
    }
}
else if( month == 6){
    if (day < 21){
        var sign = 'Gemini';
        var symbol = '♊';
    }
    else{
        var sign = 'Cancer';
        var symbol = '♋';
    }
}
else if (month == 7){
    if (day < 23){
        var sign = 'Cancer';
        var symbol = '♋';
    }
    else{
        var sign = 'Leo';
        var symbol = '♌';
    }
}
else if( month == 8){
    if (day < 23){
        var sign = 'Leo';
        var symbol = '♌';
    }
    else{
        var sign = 'Virgo';
        var symbol = '♍';
    }
}
else if (month == 9){
    if (day < 23){
        var sign = 'Virgo';
        var symbol = '♍';
    }
    else{
        var sign = 'Libra';
        var symbol = '♎';
    }
}
else if (month == 10){
    if (day < 23){
        var sign = 'Libra';
        var symbol = '♎';
    }
    else{
        var sign = 'Scorpio';
        var symbol = '♏';
    }
}
else if (month == 11){
    if (day < 22){
        var sign = 'Scorpio';
        var symbol = '♏';
    }
    else{
        var sign = 'Sagittarius';
        var symbol = '♐';
    }
};
((year%4==0)&&(year%100!=0)||(year%400==0)) ?
alert(`User Bio: ${firstName} ${lastName}, ${yearOld} years old (leap year), ${sign} ${symbol}`)
: 
alert(`User Bio: ${firstName} ${lastName}, ${yearOld} years old, ${sign} ${symbol}`);
    

