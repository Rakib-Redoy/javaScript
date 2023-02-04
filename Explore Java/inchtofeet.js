function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}


var myInch = 130;
var myFeet = inchToFeet(myInch);
console.log(myFeet);


function milesToKm(miles){
    var km = miles*1.606;
    return km;
}

var miles = 23;
var kms = milesToKm(miles);
console.log(kms)

function isEven(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true
    }
    else{
        return false
    }
}

var myNumber=isEven(467);
console.log(myNumber);
var herNumber=isEven(86);
console.log(herNumber);



function isLEapYear(year){
    var remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

var year1 = isLEapYear(2022);
console.log('This year is ', year1);
var year2 = isLEapYear(2028);
console.log('This year is ', year2);


 