function solve(name, population, treasury){
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function() {this.treasury += (this.population * this.taxRate) / 100},
        applyGrowth: function (percentage){ this.population += Math.floor((this.population * percentage) / 100)},
        applyRecession: function (percentage) { this.treasury -= Math.floor((this.treasury * percentage) / 100)}
    }

    return city;
}

const city = solve("Tortuga", 7000, 15000);

city.collectTaxes(10);
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);