function solve(obj){
    if (obj.dizziness == true) {
        let water = (obj.weight * 0.1) * obj.experience;
        obj.levelOfHydrated += water;
        obj.dizziness = false;
    }

    return obj;
}

const obj1 = { weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true };
const obj2 = { weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true };
const obj3 = { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false };
  
const result = solve(obj3);

console.log(result);