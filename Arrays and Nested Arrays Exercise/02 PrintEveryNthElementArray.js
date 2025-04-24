function solve(array, n){
    let result = [];

    for (let i = 0; i < array.length; i+=n) {
        result.push(array[i]);
        
    }

    return result;
}

const array = ['5', '20', '31', '4', '20'];
const array2 = ['dsa', 'asd', 'test', 'tset'];
const array3 = ['1', '2' ,'3' , '4' , '5'];
    
console.log(solve(array3, 6)); 