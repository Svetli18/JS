function solve(array, cnt){
    let n = cnt % array.length;

    for (let i = 0; i < n; i++) {
        const element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));
}

let array = ['1', '2', '3', '4'];
let array2 = ['Banana', 'Orange', 'Coconut', 'Apple'];

solve(array2, 15);