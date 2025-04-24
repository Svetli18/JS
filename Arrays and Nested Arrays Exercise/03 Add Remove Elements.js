function solve(array){
    let result = [];

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == 'add') {
            result.push(i + 1);
        }
        else if (array[i] == 'remove') {
            result.pop();
        }
    }

    result.length == 0 ? console.log("Empty") : console.log(result.join('\n'));
}

let array = ['add', 'add', 'add', 'add'];
let array2 = ['add', 'add', 'remove', 'add', 'add'];
let array3 = ['remove', 'remove', 'remove'];
    
solve(array3);    