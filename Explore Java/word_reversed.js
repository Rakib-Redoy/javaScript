function reverseWords(str){
    let words = str.split(' ');
    let result = [];
    for(let i = words.length -1; i>=0; i--){
        let element = words[i];
        result.push(element);
    }
    let reversed = result.join(' ');
    return reversed;
}

const myString = 'i am a good boy';
reverseWords(myString);
console.log(reverseWords(myString));