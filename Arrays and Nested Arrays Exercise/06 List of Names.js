function solve(array){
    const result = array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}

let array = ["John", "Bob", "Christina", "Ema"];

solve(array);