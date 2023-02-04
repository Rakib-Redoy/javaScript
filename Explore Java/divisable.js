for(let i=0; i<=50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('foofaa');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('faa');
    }
    else{
        console.log(i);
    }
}