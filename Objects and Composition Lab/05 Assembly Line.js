function createAssemblyLine () {
    let factory = { make: "", model: "" };
    
    factory.hasClima = function (parameter) {
        parameter.temp = 21,
        parameter.tempSettings = 21, 
        parameter.adjustTemp = function () {
            if (parameter.temp < parameter.tempSettings) {
                parameter.temp += 1; 
            }
            else if (parameter.temp > parameter.tempSettings) {
                parameter.temp -= 1;
            }
        }
    };
    
    factory.hasAudio = function (parameter) {
        parameter.currentTrack = { name: null, artist: null, },
        parameter.nowPlaying = function () {
            if (parameter.currentTrack != null) {
                console.log(`Now playing '${parameter.currentTrack.name}' by ${parameter.currentTrack.artist}`);
            }
        }
    };
    
    factory.hasParktronic = function (parameter) {
        parameter.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            }
            else if (0.1 <= distance && distance < 0.25) {
                console.log("Beep! Beep!");
            }
            else if (0.25 <= distance && distance < 0.5) {
                console.log("Beep!");  
            }
            else{
                console.log("");
            }
        } 
    };

    return factory;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
    temp: 0
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up', 
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
//console.log(myCar);
console.log(JSON.stringify(myCar, null, 2));
