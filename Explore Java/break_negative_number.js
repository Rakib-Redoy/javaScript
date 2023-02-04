let numbers = [12, 34, 24, 43, 27, -67, 90, 54];

function negativeBreak(numbers){
    let newArray = [];
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element >= 0){
            newArray.push(element);
        }
        else{
            break;
        }
    }
    return newArray;
}

let newArray = negativeBreak(numbers);
console.log(newArray);