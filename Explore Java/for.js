//   console.log("Simple For Loop");
// for(var i = 0; i < 7; i++){
//     console.log(i);
// }


// var numbers =[12, 45, 57, 43, 99, 85];

// for(var i = 0; i < 6; i++){
//     var number = numbers[i];
//     console.log("index of number is "+ number);
// }


var numbers =[12, 45, 57, 43, 99, 85, 34, 55, 90, 14, 33];
var odds = [];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number % 2 == 1){
        odds.push(number);
    }
}
console.log(odds);