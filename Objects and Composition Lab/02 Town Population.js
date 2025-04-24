function solve(input){
    let cityes = {};
    let c = 0;
    for (let i = 0; i < input.length; i++) {
        const [name, population] = input[i].split(' <-> ');
        
        if (!cityes[name]) {
            cityes[name] = 0;
        }
        cityes[name] += Number(population);
    }

    for (const kvp in cityes) {
        console.log(`${kvp} : ${cityes[kvp]}`)
    }
} 

const input = ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'];

const input2 = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];
    

solve(input2);
    