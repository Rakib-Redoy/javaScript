var ipad = 80000;
var gaminglaptop = 60000;
var lenovoYoga = 40000;
var usedLaptop = 20000;
var myMoney = 9000;
if(myMoney >= ipad){
    console.log("I will Buy a ipad");
}
else if(myMoney >= gaminglaptop){
    console.log("i will buy a Gaming Laptop");
}
else if(myMoney >= lenovoYoga){
    console.log ("I will buy a Lenovo Yoga")
}
else if(myMoney >= 20000){
    console.log("I will buy a Used laptop")
}
else{
    console.log("Gorib er abar laptop!!")
}





for(var i = 1; i <= 39; i++){
    console.log("aske amar mon valo nai " + i )
}




for(var i = 581; i <= 623; i+=2 ){
    console.log(i);
}



var learns = ['html', 'css', 'bootstrap', 'tailwind', 'js'];
for(var i = 0; i < learns.length; i++){
    var learn = learns[i];
    console.log(learn);
}



var phones = ['xiaomi', 'nokia', 'symphony', 'asus', 'lenevo'];
var x = 0;
while(x < phones.length){
    var phone = phones[x];
    console.log(phone);
    x++;
}



for(var i = 30; i < 86; i++){
    if(i == 45){
        break;
    }
    console.log(i);
}



var booksPrice = [140, 340, 280, 100, 240, 200, 160];
for(var i = 0; i < booksPrice.length; i++){

    // var book = booksPrice[i];
    if(booksPrice[i] >= 200 ){
        continue;
    }
    console.log("Book Price is " + booksPrice[i]);
}