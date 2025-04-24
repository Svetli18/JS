function solve(matrix){
    
    let prevRowSum = 0;
    let prevColSum = 0;
    let isSameRows = true;
    let isSameColumns = true;

    for (let i = 0; i < matrix.length; i++) {
        let currRowSum = 0;
        let currColSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            const rowElementValue = matrix[i][j];
            const colElementValue = matrix[j][i];

            currRowSum += rowElementValue;
            currColSum += colElementValue;
        }

        if (prevRowSum == 0 && prevColSum == 0) {
            prevRowSum = currRowSum;
            prevColSum = currColSum;
            continue;
        }

        if (prevRowSum != currRowSum) {
            isSameRows = false;
            break;
        }

        if (prevColSum != currColSum){
            isSameColumns = false;
            break;
        }

    }

    isSameRows && isSameColumns ? console.log(true) : console.log(false);
}

const matrix = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];
const matrix2 = [[11, 32, 45], [21, 0, 1], [21, 1, 1]];
const matrix3 = [[1, 0, 0], [0, 0, 1], [0, 1, 0]];

solve(matrix);