let friends = ['Akib', 'Reaz', 'Ali', 'Sohel', 'Akash', 'Amirul'];

// function bestFriend (friends){
//     let largeName = friends[0];
//     for(let i=0; i < friends.length; i++){
//         let index = i;
//         let element = friends[index];
//         let heighLength = element.length;
//         if(heighLength > largeName.length){
//             largeName = friends[i];
//         }
//     }
//     return largeName;
// }
// shorthand way------------>


function bestFriend(friends) {
    let bestFriend = friends[0];
    for (let i = 1; i < friends.length; i++) {
        if (friends[i].length > bestFriend.length) {
            bestFriend = friends[i];
        }
    }
    return bestFriend;
}

let largestFriend = bestFriend(friends);
console.log(largestFriend);