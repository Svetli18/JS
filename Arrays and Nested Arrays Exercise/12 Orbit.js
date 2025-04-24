function solve(input){
    function updateMatrix(matrix, r, c, pV, rows, cols){
        if ((0 > r || r == rows) || (0 > c || c == cols) || matrix[r][c] !== 0) {
            pV--;
            return;
        }

        matrix[r][c] = pV + 1;
        pV = matrix[r][c];
        updateMatrix(matrix, r - 1, c, pV, rows, cols);
        updateMatrix(matrix, r - 1, c - 1, pV, rows, cols);
        updateMatrix(matrix, r - 1, c + 1, pV, rows, cols);
        updateMatrix(matrix, r + 1, c, pV, rows, cols, );
        updateMatrix(matrix, r + 1, c - 1, pV, rows, cols);
        updateMatrix(matrix, r + 1, c + 1, pV, rows, cols);
        updateMatrix(matrix, r, c - 1, pV, rows, cols);
        updateMatrix(matrix, r, c + 1, pV, rows, cols);
    }
    let rows = Number(input[0]);
    let cols = Number(input[1]);
    let r = Number(input[2]);
    let c = Number(input[3]);
    let pV = 0;
    
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let array = [];
        
        for (let j = 0; j < cols; j++) {
            array.push(0);
        }

        matrix.push(array);
    }

    updateMatrix(matrix, r, c, pV, rows, cols);
    for (let i = 0; i < matrix.length; i++) {
        const elements = matrix[i];
        console.log(elements.join(' '));
    }
}

let input = [4, 4, 0, 0];

solve(input);