function reverseName(name1, name2){
    let name1Length = name1.length;
    let name2Length = name2.length;

    if (name1Length > name2Length){
        return name1.toUpperCase().split('').reverse().join('');
    }
    else {
        return name2.toUpperCase().split('').reverse().join('');
    }
}

console.log(reverseName('Akibul', 'Rakib'));