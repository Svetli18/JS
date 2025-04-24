function solve(array){
    let result = [];
    result.push(array[0]);
    let prevElement = array[0];

    for (let i = 1; i < array.length; i++) {
        const currElement = array[i];
        if (prevElement <= currElement) {
            prevElement = currElement;
            result.push(currElement);
        }
    }

    return result;
}

const array = [1, 3, 8, 4, 10, 12, 3, 2, 24];
const array2 = [1, 2, 3, 4];
const array3 = [20, 3, 2, 15, 6, 1];

solve(array);