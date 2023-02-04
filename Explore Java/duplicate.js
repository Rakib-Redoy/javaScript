let names = ['abul', 'kalam', 'azad', 'sumaiya', 'azad', 'nishat', 'kalam'];

function removeDuplicate(names){
    let unique = []; 
    for (let i = 0; i < names.length; i++){
        let name = names[i];
        console.log(name);
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

let uniqueName = removeDuplicate(names);
console.log(uniqueName);