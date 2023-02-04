let myDays = 365;

let d1To10 = 500;
let d11To20 = 300;
let d21ToAll = 100;


if(myDays <= 10){
   let d10cost = 500*myDays;
   console.log(d10cost);
}
else if(myDays > 10 && myDays <= 20){
    let d10cost = 500*10;
    let remainDays = myDays - 10;
    let in20DayCost = remainDays * 300;
    let in20DaysTotal = d10cost + in20DayCost;
    console.log(in20DaysTotal);
}
else{
    let f10DaysCost = 10*500;
    let s10DaysCost = 10*300;
    let remainDays = myDays - 20;
    let remainDaysCost = remainDays*100;
    let totalCost = remainDaysCost+f10DaysCost+s10DaysCost;
    console.log(totalCost);
}