function solve(input){
    const result = {};

    for (const current of input) {
        const splited = current.split(' | ');
        const townName = splited[0];
        const productName = splited[1];
        const price = Number(splited[2]);

        if (!result[productName]) {
            let max = Math.max();
            result[productName] = {productPrice: price, townName: townName};
        }

        if (price < result[productName].productPrice) {
           result[productName].productPrice = price;
           result[productName].townName = townName;
        }
    }

    for (const kvp in result) {
        console.log(`${kvp} -> ${result[kvp].productPrice} (${result[kvp].townName})`)
    }
}

const input = ['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10'];
    
const data = solve(input);

