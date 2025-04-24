function solve(array){
    let minHeap = [];
    minHeap.push(array[0]);
    let maxHeap = [];
    maxHeap.push(array[0]);
    let result = [];

    for (let i = 1; i < array.length; i++) {
        minHeap.push(array[i]);
        maxHeap.push(array[i]);
        let currMinIndex = minHeap.length - 1;
        let parentMinIndex = Math.floor((currMinIndex - 1) / 2);
        
        while (0 <= parentMinIndex && minHeap[parentMinIndex] > minHeap[currMinIndex]){
            let temp = minHeap[currMinIndex];
            minHeap[currMinIndex] = minHeap[parentMinIndex];
            minHeap[parentMinIndex] = temp;
            currMinIndex = parentMinIndex;
            parentMinIndex = Math.floor((currMinIndex - 1) / 2);
        }
        
        let currMaxIndex = minHeap.length - 1;
        let parentMaxIndex = Math.floor((currMaxIndex - 1) / 2);
        while (0 <= parentMaxIndex && maxHeap[parentMaxIndex] < maxHeap[currMaxIndex]) {
            let temp = maxHeap[currMaxIndex];
            maxHeap[currMaxIndex] = maxHeap[parentMaxIndex];
            maxHeap[parentMaxIndex] = temp;
            currMaxIndex = parentMaxIndex;
            parentMaxIndex = Math.floor((currMaxIndex - 1) / 2);
        }
    }

    for (let i = 0; i < array.length; i+=2) {

        let minElement = minHeap[0];
        minHeap[0] = minHeap[minHeap.length - 1];
        minHeap[minHeap.length - 1] = minElement;
        minHeap.pop();
        let parentIndex = 0;
        let leftChildIndex = Math.floor(2 * parentIndex + 1);
        let rightChildIndex = Math.floor(2 * parentIndex + 2);
        while (rightChildIndex <= minHeap.length - 1 && minHeap[rightChildIndex] < minHeap[parentIndex] || 
               leftChildIndex <= minHeap.length - 1 && minHeap[leftChildIndex] < minHeap[parentIndex]) {

            if (rightChildIndex <= minHeap.length - 1 && minHeap[rightChildIndex] < minHeap[leftChildIndex]) {
                let temp = minHeap[parentIndex];
                minHeap[parentIndex] = minHeap[rightChildIndex];
                minHeap[rightChildIndex] = temp;
                parentIndex = rightChildIndex;
                leftChildIndex = Math.floor(2 * parentIndex + 1);
                rightChildIndex = Math.floor(2 * parentIndex + 2);
            }
            else{
                let temp = minHeap[parentIndex];
                minHeap[parentIndex] = minHeap[leftChildIndex];
                minHeap[leftChildIndex] = temp;
                parentIndex = leftChildIndex;
                leftChildIndex = Math.floor(2 * parentIndex + 1);
                rightChildIndex = Math.floor(2 * parentIndex + 2);
            }
        }

        let maxElement = maxHeap[0];
        maxHeap[0] = maxHeap[maxHeap.length - 1]
        maxHeap[maxHeap.length - 1] = maxElement;
        maxHeap.pop();
        parentIndex = 0;
        leftChildIndex = Math.floor(2 * parentIndex + 1);
        rightChildIndex = Math.floor(2 * parentIndex + 2);
        while (rightChildIndex <= maxHeap.length - 1 &&  maxHeap[rightChildIndex] > maxHeap[parentIndex] || 
               leftChildIndex <= maxHeap.length - 1 && maxHeap[leftChildIndex] > maxHeap[parentIndex]) {
            
            if (rightChildIndex <= maxHeap.length - 1 && maxHeap[rightChildIndex] > maxHeap[leftChildIndex]) {
                let temp = maxHeap[parentIndex];
                maxHeap[parentIndex] = maxHeap[rightChildIndex];
                maxHeap[rightChildIndex] = temp;
                parentIndex = rightChildIndex;
                leftChildIndex = Math.floor(2 * parentIndex + 1);
                rightChildIndex = Math.floor(2 * parentIndex + 2);
            }
            else {
                let temp = maxHeap[parentIndex];
                maxHeap[parentIndex] = maxHeap[leftChildIndex];
                maxHeap[leftChildIndex] = temp;
                parentIndex = leftChildIndex;
                leftChildIndex = Math.floor(2 * parentIndex + 1);
                rightChildIndex = Math.floor(2 * parentIndex + 2);
            }    
        }

        result.push(minElement);
        result.push(maxElement);
    }
    
    if (array.length % 2 != 0) {
        result.pop();
    }
    return result;
}

// function solve(array){
//     let sorted = array.sort((a, b) => a - b);
//     let result = [];

//     for (let i = 0; i < array.length / 2; i++) {
//         result.push(sorted[i]);
//         result.push(sorted[sorted.length - 1 - i]);
//     }

//     if (array.length % 2 != 0) {
//         result.pop();
//     }

//     return result;
// }

let array = [1, 65, 3, 52, 63, 31, -3, 18, 56];
let array2 = [22, 9, 63, 3, 2, 19, 54, 11, 21, 18];

console.log(solve(array));