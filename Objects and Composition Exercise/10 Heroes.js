// function solve(){
//     let hero = { name: "", health: 100, status: false };

//     if (!this.status) {
//         hero.fighter = function (name){
//             this.name = name,
//             this.stamina = 100
//             this.status = true
//             fight () {
//                 if (0 < this.stamina) {
//                     this.stamina = this.stamina - 1;
//                     console.log(`${this.name} slashes at the foe!`);
//                 }
//             };
//         };
//     }
    
//     if (!this.status) {
//         hero.mage = function (name){
//             this.name = name,
//             this.mana = 100,
//             this.status = true
//             cast (spellName){
//                 if (0 < this.mana) {
//                     this.mana = this.mana - 1;
//                     console.log(`${this.name} cast ${spellName}`);         
//                 }
//             };
//         };
//         return hero
//     }

//     return hero;
// }
function solve() {
    return {
        mage: function(name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast(spellName) {
                    if (this.mana > 0) {
                        this.mana--;
                        console.log(`${this.name} cast ${spellName}`);
                    }
                }
            };
        },
        fighter: function(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    if (this.stamina > 0) {
                        this.stamina--;
                        console.log(`${this.name} slashes at the foe!`);
                    }
                }
            };
        }
    };
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
