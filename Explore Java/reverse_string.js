function reverseString(text){
    let reversed = '';
    for (let i = text.length-1; i >= 0; i--){
        let index = i;
        let element = text[index];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

let myString = 'i am a good boy';
let reversed = reverseString(myString);
console.log(reversed);