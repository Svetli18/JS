function solve(matrix, array){
    function result(row, col, player){
        let win = false;
        //red 1vi
        if (row == 0 && col == 0) {
            if (matrix[row][col + 1] == player && matrix[row][col + 2] == player) {
                win = true;
            }
            else if (matrix[row + 1][col + 1] == player && matrix[row + 2][col + 2] == player) {
                win = true;
            }
            else if (matrix[row + 1][col] == player && matrix[row + 2][col] == player) {
                win = true;
            }
        }
        else if (row == 0 && col == 1) {
            if (matrix[row][col - 1] == player && matrix[row][col + 1] == player) {
                win = true;
            }
            else if (matrix[row + 1][col] == player && matrix[row + 2][col] == player) {
                win = true;
            }
        }
        else if (row == 0 && col == 2) {
            if (matrix[row][col - 1] == player && matrix[row][col - 2] == player) {
                win = true;
            }
            else if (matrix[row + 1][col - 1] == player && matrix[row + 2][col - 2] == player) {
                win = true;
            }
            else if (matrix[row + 1][col] == player && matrix[row + 2][col] == player) {
                win = true;
            }
        }//red 2ri
        else if (row == 1 && col == 0) {
            if (matrix[row][col + 1] == player && matrix[row][col + 2] == player) {
                win = true;
            }
            else if (matrix[row - 1][col] == player && matrix[row + 1][col] == player) {
                win = true;
            }
        }
        else if (row == 1 && col == 1) {
            if (matrix[row][col - 1] == player && matrix[row][col + 1] == player) {
                win = true;
            }
            else if (matrix[row - 1][col] == player && matrix[row + 1][col] == player) {
                win = true;
            }
            else if (matrix[row - 1][col - 1] == player && matrix[row + 1][col + 1] == player) {
                win = true;
            }
            else if (matrix[row - 1][col + 1] == player && matrix[row + 1][col - 1] == player) {
                win = true;
            }
        }
        else if (row == 1 && col == 2) {
            if (matrix[row - 1][col] == player && matrix[row + 1][col] == player) {
                win = true;
            }
            else if (matrix[row][col - 1] == player && matrix[row][col - 2] == player) {
                win = true;
            }
        }//red 3ti
        else if (row == 2 && col == 0) {
            if (matrix[row][col + 1] == player && matrix[row][col + 2] == player) {
                win = true;
            }
            else if (matrix[row - 1][col + 1] == player && matrix[row - 2][col + 2] == player) {
                win = true;
            }
            else if (matrix[row - 1][col] == player && matrix[row - 2][col] == player) {
                win = true;
            }
        }
        else if (row == 2 && col == 1) {
            if (matrix[row - 1][col] == player && matrix[row - 2][col] == player) {
                win = true;
            }
            else if (matrix[row][col - 1] == player && matrix[row][col + 1] == player) {
                win = true;
            }
        }
        else if (row == 2 && col == 2) {
            if (matrix[row - 1][col] == player && matrix[row - 2][col] == player) {
                win = true;
            }
            else if (matrix[row - 1][col - 1] == player && matrix[row - 2][col - 2] == player) {
                win = true;
            }
            else if (matrix[row][col - 1] == player && matrix[row][col - 2] == player) {
                win = true;
            }
        }

        return win;
    }

    let xPlayerWin = false;
    let oPlayerWin = false;
    let cnt = 0;

    for (let i = 0; i < array.length; i++) {
        const elements = array[i].split(' ');
        let row = Number(elements[0]);
        let col = Number(elements[1]);

        if (cnt == 9) {
            break;
        }

        if (matrix[row][col] != false) {
            console.log("This place is already taken. Please choose another!")
            continue;
        }

        if (cnt % 2 == 0) {
            const player = 'X'
            matrix[row][col] = player;
            
            xPlayerWin = result(row, col, player);
            cnt++;
            if (xPlayerWin) {
                break;
            }
        }
        else {
            const player = 'O'
            matrix[row][col] = player;
            
            oPlayerWin = result(row, col, player);
            cnt++;
            if (oPlayerWin) {
                break;
            }
        }
    }

    if (xPlayerWin) {
        console.log("Player X wins!");
    }
    else if (oPlayerWin) {
        console.log("Player O wins!");
    }
    else{
        console.log("The game ended! Nobody wins :(");
    }

    console.log(matrix[0].join("\t"));
    console.log(matrix[1].join("\t"));
    console.log(matrix[2].join("\t"));

}

let matrix = 
[[false, false, false],
 [false, false, false],
 [false, false, false]];

let array = ["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"];
let array1 = ["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"];
let array2 = ["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"];
   

solve(matrix, array1); 