function createSortedList(){
    function swap (a, b, list){
        let temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    }

    const obj = { 
        list: [],
        size: Number(0) 
        };

        obj.add = function (element){
            this.list.push(element);
            this.size = this.size + 1;
            let index = this.list.length - 1;
            while(0 < index && this.list[index] < this.list[index - 1]){
                swap(index, index - 1, this.list);
                index--;
            }
        };

        obj.remove = function (index){
            if (0 < this.list.length && 0 <= index && index < this.list.length) {
                this.list.splice(index, 1);
                this.size = this.size - 1;
            }
        };

        obj.get = function (index){
            if (0 <= index && index < this.list.length) {
                return this.list[index];
            }
        }

    return obj;
}

let list = createSortedList();
list.add(6);
list.add(10);
list.add(7);
list.add(5);
console.log(list.get(1));
console.log(list.list);


var myList = createSortedList();
//expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}
//console.log(myList.size);
expect(myList.size).to.equal(20, "Elements weren't added");
// Sort array
expectedArray.sort((a, b) => a - b);
// Compare with collection
for (let i = 0; i < expectedArray.length; i++) {
    expect(myList.get(i)).to.equal(expectedArray[i], "Array wasn't sorted");
}