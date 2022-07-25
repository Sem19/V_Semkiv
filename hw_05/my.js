let userAnswer = confirm(`Tell me three most important words 💚`);

if (userAnswer === true) {
    console.log(`go!`);
    let final = ``;
    const countOfWords = 3;
    let hasNumber = false;
    let hasNumber2 = false;

    for (let wordNumber = 1; wordNumber <= countOfWords; wordNumber++) {
        let word;
        let transform;
        do {
            word = prompt(`Enter word #${wordNumber}`);
            if (word) word = word.trim();
        }   while (!word || word.toLowerCase() === `hello`);

        for(let letter=0; letter<word.length; letter++){
            if(!isNaN(+word[letter])) {
            hasNumber = true;
            word = prompt(`Enter word #${wordNumber}`);
            }}

        do {
            transform = prompt(`Choose type of transformation for #${wordNumber}:
            uppercase | lowercase | capitalize`);
            if (transform) transform = transform.trim();
        }   while (!transform || transform.toLowerCase() === `hello`);

        for(let letter=0; letter<transform.length; letter++){
            if(!isNaN(+transform[letter])) {
            hasNumber2 = true;
            transform = prompt(`Choose type of transformation for #${wordNumber}:
            uppercase | lowercase | capitalize`);
            }}
            
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