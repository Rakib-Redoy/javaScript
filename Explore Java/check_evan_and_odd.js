

// function findOddNumbers() {
//     return numbers.filter(num => num % 2 !== 0);
//   }
  
//   const numbers = [22, 45, 32, 39, 74, 51];
//   const oddNumbers = findOddNumbers(numbers);
//   console.log(oddNumbers);


// function isEvan(number){
//     let remainder = number % 2;
//     if(remainder !== 0){
//        return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEvan(303));
// console.log(isEvan(306));

function gateSomeArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum+element;
        console.log(i, element,sum);
    }
    return sum;
}



function getOddNumbersSum(numbers){
    let oddNumbers=[];
    // let evenNumbers=[];
    for(let i=0; i<numbers.length; i++){
        let element= numbers[i];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
        // else{
        //     evenNumbers.push(element);
        // }
    }
    return oddNumbers;
}



const myNumbers=[12,65,45,78,32,45,91];
const oddNumbers = getOddNumbersSum(myNumbers);
console.log(oddNumbers);
let oddNumbersSum =gateSomeArray(oddNumbers);
// gateSomeArray(myNumbers);