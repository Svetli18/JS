function solve (array){
    let result2 = array.sort((a, b) => {
        let aName = a.toLowerCase();
        let bName = b.toLowerCase();
        
        return aName.localeCompare(bName);
    })
    let result3 = result2.sort((a, b) => a.length - b.length);
    console.log(result3.join('\n'));
}

const array = ['alpha', 'beta', 'gamma'];
const array2 = ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'];
const array3 = ['test', 'Deny', 'omen', 'Default'];
        
solve(array3);