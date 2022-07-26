let userAnswer = confirm(`Tell me three most important words 💚`);

if (userAnswer === true) {
    console.log(`go!`);
    let final = ``;
    const countOfWords = 3;
    let wordHasNumber = false;
    let wordHasNumber2 = false;

    for (let wordNumber = 1; wordNumber <= countOfWords; wordNumber++) {
        let word;
        let transform;
        do {
            word = prompt(`Enter word #${wordNumber}`);
            if(word){
                word = word.trim();
                wordHasNumber = false;

                for(let letter=0; letter<word.length; letter++){
                    let currentLetter = word[letter];
                    let convertToNumber = Number(currentLetter);
                    let letterIsNotNumber = isNaN(convertToNumber);

                    if(letterIsNotNumber === false) {
                        wordHasNumber = true;
                    }
                }
            }

        }   while (!word || word.toLowerCase() === `hello` || wordHasNumber);

        do {
            transform = prompt(`Choose type of transformation for #${wordNumber}:
            uppercase | lowercase | capitalize`);
            if (transform) {
                transform = transform.trim();
                wordHasNumber2 = false;

                for(let letter=0; letter<transform.length; letter++){
                    let currentLetter = transform[letter];
                    let convertToNumber = Number(currentLetter);
                    let letterIsNotNumber = isNaN(convertToNumber);

                    if(letterIsNotNumber === false) {
                        wordHasNumber2 = true;
                    }
                }
            }

        }   while (!transform || transform.toLowerCase() === `hello` || wordHasNumber2);
            
        if(transform == `uppercase`){
            final += word;
            final += wordNumber === countOfWords ? 
            `!`
            : ` `;
        }
        if(transform == `lowercase`){
            final += word.toLowerCase();
            final += wordNumber === countOfWords ? 
            `!`
            : ` `;
        }
        if(transform == `capitalize`){
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            final += capitalizeFirstLetter(word);
            final += wordNumber === countOfWords ? 
            `!`
            : ` `;
        }
    }
    console.log(final);
}