const emoticon = ['😉', '😊','😃','😆','😉','🙂','🤬','🤢','☠','👻'];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomString = String(prompt('Enter string'));
let operation = Number(prompt(`Enter the transaction number: 
    1 unicode value;
    2 delete symbol;
    3 replace character;
    4 number of letters.
`));

if (operation === 1){
    let symbolIndex = Number(prompt('Enter symbol index'));
    console.log(randomString.charCodeAt(symbolIndex - 1));
}
else if (operation === 2){
    let symbolIndex = Number(prompt('Enter symbol index'));

    let str = randomString;
    let str2 = ``;
    let str3 = str[symbolIndex-1];
    console.log(str3);
    for(let i =0; i<str.length; i++){
        if(str[i]!==str3){
            str2 += str[i];
        } else {
            str2 += ``;
        }
    }
    alert(str2);
}
else if (operation === 3){
    let symbolIndex = Number(prompt('Enter symbol index'));
    const randomInt = String(getRandomIntInclusive(0, 10));
    const symbol = emoticon[randomInt];

    let string = randomString.substring(0, symbolIndex) + 
    symbol + randomString.substring(symbolIndex + 1);
    console.log(string)
}
else if (operation === 4){
    let withoutspace = randomString.replace(/\s/g, '');
    console.log(withoutspace.length);
}
