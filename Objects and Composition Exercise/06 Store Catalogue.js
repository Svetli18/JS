function solve(input){
    let data = {};

    for (const current of input) {
        const splited = current.split(' : ');
        const productName = splited[0];
        const productPrice = splited[1];
        const firstLetter = productName.substring(0, 1);

        if (!data[firstLetter]) {
            data[firstLetter] = {}
        }

        if (!data[firstLetter][productName]) {
            data[firstLetter][productName] = productPrice;
        }
    }

    //console.log(data);
    //const sorted = Object.keys(result).sort();
    // const sortedNested = Object.fromEntries(
    //     Object.entries(data).map(([outerKey, innerObj]) => {
    //       const sortedInner = Object.fromEntries(
    //         Object.entries(innerObj).sort(([a], [b]) => a.localeCompare(b))
    //       );
    //       return [outerKey, sortedInner];
    //     })
    //   );

      
    const fullySorted = Object.fromEntries(
    Object.entries(data)
      .sort(([a], [b]) => a.localeCompare(b)) // sort outer keys
      .map(([outerKey, innerObj]) => {
        const sortedInner = Object.fromEntries(
          Object.entries(innerObj).sort(([a], [b]) => a.localeCompare(b)) // sort inner keys
        );
        return [outerKey, sortedInner];
      })
    );
    let x = 0;
    for (const key in fullySorted) {
        console.log(key)
        for (const kvp in fullySorted[key]) {
            console.log(`  ${kvp}: ${fullySorted[key][kvp]}`)
        }
    }
}

const input = ['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'];
    
solve(input);