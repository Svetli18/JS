function solve(input){
    const result = [];

    let splited = input[0].split("|")
    .map(s => s.trim())
    .filter(s => s !== "");

    const town = splited[0];
    const latitude = splited[1];
    const longitude = splited[2];
    
    for (let i = 1; i < input.length; i++) {
        splited = input[i].split("|")
        .map(s => s.trim())
        .filter(s => s !== "");

        const currentTown = splited[0];

        //const latitudeAsNumber = parseFloat(splited[1]);
        //const roundedLatitude = latitudeAsNumber.toFixed(2);
        const roundedLatitude = parseFloat(splited[1]).toFixed(2);
        const currentLatitude = parseFloat(roundedLatitude);

        //const longitudeAsNumber = parseFloat(splited[2]);
        //const roundedLongitude = longitudeAsNumber.toFixed(2);
        const roundedLongitude = parseFloat(splited[2]).toFixed(2);
        const currentLongitude = parseFloat(roundedLongitude);

        const obj = {Town: currentTown, Latitude: currentLatitude, Longitude: currentLongitude};

        result.push(obj);
    }

    myJSON = JSON.stringify(result);
    console.log(myJSON);
}

const input = ['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'];

solve(input);