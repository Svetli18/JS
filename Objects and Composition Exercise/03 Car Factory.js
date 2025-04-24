function solve(order){
    const car = {}

    car.model = { model: "" };
    car.engine = { power: 0 , volume: 0 };
    car.carriage = { type:  "", color: "" };
    car.wheels = [0, 0, 0, 0];

    const horsePower = order['power'];
    const wheelsDiameter = Math.floor(Number(order['wheelsize']));
    
    car.model = order['model'];
    car.carriage.type = order['carriage'];
    car.carriage.color = order['color'];
    car.engine.power = horsePower;

    if (horsePower < 120) {
        car.engine.volume = 1800;
    }
    else if (horsePower < 200) {
        car.engine.volume = 2400;
    }
    else if (horsePower >= 200) {
        car.engine.volume = 3500;
    }

    if (wheelsDiameter % 2 == 0) {
        const diameter = wheelsDiameter - 1;
        car.wheels.fill(diameter);
    }
    else {
        const diameter = wheelsDiameter + 0;
        car.wheels.fill(diameter);
    }

    return car;
}

const order = { model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 17 };
let input = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 };
const car = solve(input);
console.log(car);
//console.log(JSON.stringify(car, null, 2));