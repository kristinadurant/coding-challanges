var isValidSudoku = function(board) {
    //check rows
    for(let i=0; i<9; i++) {
        let row = board[i].filter(elem => elem>='1' && elem<='9')
        if(row.length > 1) {
            for (let j = 0; j<row.length-1; j++) {
                if(row.slice(j+1,row.length).includes(row[j])) return false;
            }
        }
    }
    // check columns
    for(let i=0; i<9; i++) {
        let column = [];
        for(let k=0; k<9; k++) {
            if(board[k][i]>='1' && board[k][i]<='9') column.push(board[k][i]);
        }
        if(column.length > 1) {
            for (let j = 0; j<column.length-1; j++) {
                if(column.slice(j+1,column.length).includes(column[j])) return false;
            }
        }
    }
    //check squares
    for (let i=0; i<9; i=i+3) {
        for (let j=0; j<9; j=j+3) {
        let square = [...board[i].slice(j,j+3), ...board[i+1].slice(j,j+3), ...board[i+2].slice(j,j+3)];   
        let square1 = square.filter(elem => elem>='1' && elem<='9')
        if(square1.length > 1) {
            for (let k = 0; k<square1.length-1; k++) {
                if(square1.slice(k+1,square1.length).includes(square1[k])) return false;
            }
        }   
        }
        
    }
    
    return true;
};