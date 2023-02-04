function getLargestName(names) {
  let largestName = "";
  for (let name of names) {
    if (name.length > largestName.length) {
      largestName = name;
    }
  }
  return largestName;
}
var allNames = ['abdul', 'karim', 'kuddus', 'al-mamun', 'jit']
var longName = getLargestName(allNames);

console.log(longName);

var myDays = 35;

var oneTo10DaysCost = 500;
var tenTo20DaysCost = 300;
var twentyToAllCost = 100;

if (myDays <= 10){
  var totalCost = myDays*500;
}
else if (myDays <= 20 && myDays > 10){
  var first10DaysCost = 10*500;
  var remainingDaysCost = myDays - 10;
  var totalDaysCost = remainingDaysCost*300;
  var in20DaysTotal = first10DaysCost+totalDaysCost;
}
else (myDays > 20 );{
  var remainingDays = myDays-20;
  var remainingOver20DaysTotal= remainingDays*10;
  var totalAbove20DaysCost = first10DaysCost + totalDaysCost + remainingOver20DaysTotal;
  console.log(totalAbove20DaysCost);
} 
