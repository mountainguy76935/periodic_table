export const siftExtra = (value) => {
    let rowExtra;
    let columnExtra;
    if (value > 57 && value<72) {
        value = value-54
    } else if (value > 89 && value<104) {
        value = value-68
    }
      if (value%18 === 0) {
        rowExtra = Math.floor(value/18);
        columnExtra = value/Math.floor(value/18)
    } else if (value%18 !== 0){
        rowExtra = 3+Math.floor(value/18)
        columnExtra = value%18
    }
    return `${rowExtra} / ${columnExtra} / ${rowExtra} / ${columnExtra}`
}

export const siftMid = (value) => {
    let rowMid;
    let columnMid;
    let subtract = 0;
    if ((value >= 57 && value < 72) || (value >= 89 && value < 104)) {
        return null
    } else if (value>71 && value<89) {
        subtract = 14
    } else if (value>103 && value<120) {
        subtract = 28
    }
    if (value<57 || value>71) {
        value = value-subtract
          if (value%18 === 0) {
            rowMid = 2+Math.floor(value/18);
            columnMid = value/Math.floor(value/18)
        } else if (value%18 !== 0){
            rowMid = 3+Math.floor(value/18)
            columnMid = value%18
        }
    }
    return `${rowMid} / ${columnMid} / ${rowMid} / ${columnMid}`
}

export const siftTop = (val) => {
    let row;
    let column;
    if (val === 1) {
        return '1 / 1 / 1 / 1'
    } else if (val === 2) {
        return '1 / 18 / 1 / 18'
    } else if (val === 3) {
        return '2 / 1 / 2 / 1'
    } else if (val === 4) {
        return '2 / 2 / 2 / 2'
    } else if (val > 4 && val < 11) {
        column = 8+val;
        row = 2
        return `${row} / ${column} / ${row} / ${column}`;
    } else if (val === 11) {
        return '3 / 1 / 3 / 1'
    } else if (val === 12) {
        return '3 / 2 / 3 / 2'
    } else if (val > 12) {
        column = val;
        row = 3
        return `${row} / ${column} / ${row} / ${column}`;
    }
}