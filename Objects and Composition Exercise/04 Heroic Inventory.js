function solve(input){
    const result = [];

    for (const current of input) {
        const splited = current.split(' / ');
        const name = splited[0];
        const level = Number(splited[1]);
        const items = [];
        let itemsForSplit = splited[2];
        let splitedItems = itemsForSplit.split(/[, \\ ]/);
        for (let i = 0; i < splitedItems.length; i++) {
            const element = splitedItems[i];
            items.push(element);
        }
        const hero = {name, level, items};

        result.push(hero);
    }
    console.log(JSON.stringify(result));
    //return result;
}

const input = ['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'];

solve(input);

//console.log(JSON.stringify(heroes));