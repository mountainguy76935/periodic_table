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