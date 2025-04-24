function solve(input){
    const result = {};

    for (let i = 0; i < input.length; i+=2) {
        const productName = input[i];
        const productCalories = Number(input[i + 1]);
        
        result[productName] = productCalories;
    }

    return result;
}

const input = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

const result = solve(input);

console.log(result);