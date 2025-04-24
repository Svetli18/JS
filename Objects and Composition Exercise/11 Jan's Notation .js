function solve(input){
    // const parser = {
    //     addition(a, b) { return a + b; },
    //     subtraction(a, b) { return a - b; },
    //     multiplication(a, b) { return a * b; },
    //     division(a, b) { return a / b; },
    // }
    let numbers = [];
    let isFail = false;
    for (let i = 0; i < input.length; i++) {
        const command = input[i];
        
        if (typeof command != "string") {
            numbers.push(command)
        }
        else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
                isFail = true;
                break;
            }
            let second = numbers.pop();
            let first = numbers.pop();
            let result = 0;
            switch (command) {
                case '+': result = first + second;
                    break;
                case '-': result = first - second;
                    break;   
                case '*': result = first * second;
                    break;
                case '/': result = first / second;
                    break; 
            }
            numbers.push(result);
        }
    }

    if (!isFail) {
        if (1 == numbers.length) {
            console.log(numbers.pop());
        }
        else {
            console.log("Error: too many operands!");
        }
    }
}

const input = [5, 3, 4, '*', '-'];
const input1 = [3, 4, '+'];
const input2 = [7, 33, 8, '-'];
const input3 = [15, '/'];
solve(input3);