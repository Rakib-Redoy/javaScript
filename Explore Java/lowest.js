function lowestNumber(numbers){
    let lowestNumber = numbers[0];
    for(let i=0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element<lowestNumber){
            lowestNumber=element;
        }
    }
    return lowestNumber;
}

let allNumbers = [12, 34, 30, 20, 14, 11];
let lowNumber = lowestNumber(allNumbers);
console.log('lowest Number is : ', lowNumber);