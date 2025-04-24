function solve(array, delimiter){
    let result = "";

    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            result = array[i];
        }
        else{
            result += delimiter + array[i];
        }
    }

    console.log(result);
}

const array = ['One', 'Two', 'Three', 'Four', 'Five'];
const delimiter = '-';

solve(array, delimiter);