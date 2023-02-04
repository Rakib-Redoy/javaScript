function requiredPaper(firstBook, secondBook, thirdBook){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    let firstBookPageNeed  =  firstBook * firstBookPage;
    let secondBookPageNeed =  secondBook * secondBookPage;
    let thirdBookPageNeed  =  thirdBook * thirdBookPage;

    let totalPageRequired = firstBookPageNeed + secondBookPageNeed + thirdBookPageNeed;
    return totalPageRequired;
}


console.log(requiredPaper(12, 5, 7));